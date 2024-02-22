import { TypeSelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Word from "./word";

type Props = {
  selectedPage: TypeSelectedPage;
  setSelectedPage: (value: TypeSelectedPage) => void;
};

const Home = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <motion.section
      id="Home"
      className="z-10 mt-20 h-60 w-full"
      onViewportEnter={() => setSelectedPage(TypeSelectedPage.Home)}
    >
      <div className="mx-auto h-full w-1/3">
        <div className="flex h-full flex-col justify-end gap-2">
          <motion.div
            className="text-center font-Protest_Revolution text-6xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0.75, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h1>I am RUDY</h1>
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
            <h2>
              I am a <Word />
            </h2>
          </motion.div>
          <div className="text-center">{selectedPage}3</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
