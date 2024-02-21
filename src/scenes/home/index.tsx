import { TypeSelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

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
          <div className="text-center font-Protest_Revolution text-6xl">
            <h1>I am RUDY</h1>
          </div>
          <div className="text-center font-Protest_Riot text-3xl">
            <h2>
              I am a <span>Programer</span>
            </h2>
          </div>
          <div className="text-center">{selectedPage}3</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
