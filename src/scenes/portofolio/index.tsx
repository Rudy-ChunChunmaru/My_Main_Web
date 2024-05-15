import { motion } from "framer-motion";
import { useState } from "react";

import { TypeSelectedPage } from "@/shared/types";

import Program from "./Program";

type Props = {
  setSelectedPage: (value: TypeSelectedPage) => void;
};

const Portofolio = ({ setSelectedPage }: Props) => {
  const [LookToDetail, IsLookToDetail] = useState<boolean>(true);
  // const [LookToDetailJSX, SetLookToDetailJSX] = useState<JSX.Element>(
  //   <div>a</div>
  // );

  return (
    <div>
      <motion.div
        id="portofolio"
        className="z-40 h-fit w-full bg-slate-800 px-3 py-5 text-black"
        onViewportEnter={() => setSelectedPage(TypeSelectedPage.Portofolio)}
      >
        <div className="mx-auto ml-3 w-11/12 flex-row">
          <div className="mb-2 w-full rounded-md bg-slate-300 py-5 text-center">
            <strong>MY PORTOFOLIO</strong>
          </div>
          <div className="mb-2 flex rounded-md bg-slate-300 p-3 md:p-5">
            <Program></Program>
          </div>
        </div>
      </motion.div>

      {LookToDetail && (
        <div
          className="fixed top-0 z-[100] h-screen w-screen bg-black opacity-80"
          onClick={(LookToDetail) => IsLookToDetail(!LookToDetail)}
        >
          {/* {LookToDetailJSX} */}
        </div>
      )}
    </div>
  );
};

export default Portofolio;
