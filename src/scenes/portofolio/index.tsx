import { TypeSelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Program from "./Program";

type Props = {
  setSelectedPage: (value: TypeSelectedPage) => void;
};

const Portofolio = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      id="portofolio"
      className="z-40 h-fit w-full bg-slate-800 px-3 py-5 text-black"
      onViewportEnter={() => setSelectedPage(TypeSelectedPage.Portofolio)}
    >
      <div className="mx-auto ml-3 w-11/12 flex-row">
        <div className="mb-2 w-full rounded-md bg-slate-300 py-5 text-center">
          <strong>MY PORTOFOLIO</strong>
        </div>
        <div className="mb-2 flex rounded-md bg-slate-300 p-5">
          <Program></Program>
        </div>
      </div>
    </motion.div>
  );
};

export default Portofolio;
