import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { TypeSelectedPage } from "@/shared/types";
import Link from "./link";

type Props = {
  selectedPage: TypeSelectedPage;
  setSelectedPage: (value: TypeSelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const [isMeanuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav>
      <div className="fixed top-0 z-30 h-screen w-full">
        <div className="mx-auto flex h-screen justify-end">
          <button
            className="group items-center bg-white transition duration-500  hover:bg-slate-300 sm:px-1 md:px-2"
            onClick={() => setIsMenuToggled(!isMeanuToggled)}
          >
            <Bars3Icon className="h-6 w-6 text-black group-hover:sm:mx-2  group-hover:md:mx-4" />
          </button>
        </div>
      </div>

      {/* MENU */}
      {isMeanuToggled && (
        <motion.div
          className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-white drop-shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0.75, x: 150 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* Close ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMeanuToggled)}>
              <XMarkIcon className=" h-6 w-6 text-gray-400"></XMarkIcon>
            </button>
          </div>

          {/* MENU */}
          <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Profile"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Portofolio"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
