import { TypeSelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Word_intro from "./word_intro";
import Profile from "@/assets/profile.png";

type Props = {
  setSelectedPage: (value: TypeSelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <div className="py-32" id="home">
      <motion.section
        className="z-10 w-full md:h-40"
        onViewportEnter={() => setSelectedPage(TypeSelectedPage.Home)}
      >
        <div className="mx-auto flex h-full w-10/12 gap-1">
          <div className="relative w-5/12">
            <img
              className="mx-auto w-52"
              alt="foto profile"
              src={Profile}
            ></img>
          </div>
          <div className="flex h-full w-6/12 flex-col gap-2">
            <motion.div
              className="text-center font-Protest_Revolution text-6xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0.75, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h1>I AM RUDY</h1>
            </motion.div>
            <motion.div
              className="text-center font-Protest_Riot text-3xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.7 }}
              variants={{
                hidden: { opacity: 0.75, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Word_intro />
            </motion.div>
            <motion.div
              className=" bg-gray-400 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              variants={{
                hidden: { opacity: 0.75, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              This Web Still Under Development !!!
              <br></br>
              Thx For Visiting This Web
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
