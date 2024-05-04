import { TypeSelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Media from "./Media";

type Props = {
  setSelectedPage: (value: TypeSelectedPage) => void;
};

const index = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      id="media"
      className="z-40 w-full bg-slate-300 px-3 pt-5"
      onViewportEnter={() => setSelectedPage(TypeSelectedPage.Media)}
    >
      <div className="mx-auto ml-3 w-11/12 flex-row">
        <div className="mb-2 w-full rounded-md bg-slate-800 py-5 text-center">
          MY MEDIA
        </div>

        <div className="mb-2 rounded-md bg-slate-800">
          <Media></Media>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
