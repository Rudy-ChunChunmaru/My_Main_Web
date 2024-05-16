import { motion } from "framer-motion";
import { useState } from "react";

import { TypeSelectedPage } from "@/shared/types";

import Program from "./Program";

type Props = {
  setSelectedPage: (value: TypeSelectedPage) => void;
};

const Portofolio = ({ setSelectedPage }: Props) => {
  const [LookToDetail, IsLookToDetail] = useState<boolean>(false);
  const [LookToDetailJSX, SetLookToDetailJSX] = useState<JSX.Element>(
    <div></div>
  );

  return (
    <div>
      <motion.div
        id="portofolio"
        className="h-fit w-full bg-slate-800 px-3 py-5 text-black"
        onViewportEnter={() => setSelectedPage(TypeSelectedPage.Portofolio)}
      >
        <div className="mx-auto ml-3 w-11/12 flex-row">
          <div className="mb-2 w-full rounded-md bg-slate-300 py-5 text-center">
            <strong>MY PORTOFOLIO</strong>
          </div>
          <div className="mb-2 flex rounded-md bg-slate-300 p-3 md:p-5">
            <Program
              IsLookToDetail={IsLookToDetail}
              SetLookToDetailJSX={SetLookToDetailJSX}
            ></Program>
          </div>
        </div>
      </motion.div>

      {LookToDetail && (
        <div className="z-[90] h-screen w-screen flex-col">
          <div
            className="fixed top-0 z-[90] h-full w-full bg-black p-[3%] opacity-80 "
            onClick={(LookToDetail) => IsLookToDetail(!LookToDetail)}
          >
            <div className="fixed top-[5%] mb-5 w-full text-center text-2xl text-white">
              <p>
                <strong>CLICK BLACK BAR TO CLOSE</strong>
              </p>
            </div>
          </div>

          {LookToDetailJSX}
        </div>
      )}
    </div>
  );
};

export default Portofolio;
