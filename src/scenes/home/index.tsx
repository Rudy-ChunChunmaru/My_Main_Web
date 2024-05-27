import { TypeSelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Word_intro from "./word_intro";
import Profile from "@/assets/profile.png";

type Props = {
  setSelectedPage: (value: TypeSelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <div className="py-12" id="home">
      <motion.section
        className="z-10 flex w-full flex-col gap-5"
        onViewportEnter={() => setSelectedPage(TypeSelectedPage.Home)}
      >
        <div className="mx-auto flex h-full w-10/12 flex-col gap-1 sm:flex-row">
          <div className="relative top-10 z-0 w-full sm:top-0 sm:w-6/12">
            <div className="group relative mx-auto w-48">
              <div className="absolute z-[0] m-auto w-full border-8 border-slate-300 bg-transparent pt-1 blur-lg">
                <img className="" alt="foto profile" src={Profile}></img>
              </div>
              <div className="relative z-[10] m-auto w-[90%] rounded-lg border-4 border-slate-300 bg-transparent pt-1 blur-none">
                <img
                  className="rounded-lg"
                  alt="foto profile"
                  src={Profile}
                ></img>
              </div>
            </div>
          </div>
          <div className="z-10 flex h-full w-full flex-col gap-2 sm:w-5/12">
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
              viewport={{ once: false }}
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

        <motion.div
          className="mx-auto flex w-9/12 flex-col justify-center rounded-md border-2 border-indigo-300 p-5 sm:w-6/12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0.75, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <motion.div
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0.75, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-center font-Protest_Riot text-lg">
              INTRODUCTION
            </h2>
          </motion.div>
          <motion.div
            className="mx-auto  py-3 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0.75, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p className="font-Montserrat text-sm">
              Hello Guys !!! <br></br>
              &nbsp;&nbsp;&nbsp; My name is Rudy. Im from Sanggau, West Borneo -
              Indonesia and now I live on west java. I worked as a Full Stack
              Web Developer creating web ERP and studied IoT several times,
              studied a little data analysis, robotics and networking.
              <br></br>
              &nbsp;&nbsp;&nbsp; I really like programming and mechanics,
              control systems. Sometimes learning it makes your head hurt, but
              sometimes when you've succeeded, you feel oh it's really really
              not difficult at all hahaha. that my introductions, thank you
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
