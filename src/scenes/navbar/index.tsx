import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { TypeSelectedPage } from "@/shared/types";
import {
  HomeIcon,
  UserCircleIcon,
  DocumentTextIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "./link";

type Props = {
  selectedPage: TypeSelectedPage;
  setSelectedPage: (value: TypeSelectedPage) => void;
};

type datanavbartype = {
  title: string;
  logo: JSX.Element;
};

const data_nav_bar: datanavbartype[] = [
  {
    title: "Home",
    logo: <HomeIcon className="fill-current"></HomeIcon>,
  },
  {
    title: "Profile",
    logo: <UserCircleIcon className="fill-current"></UserCircleIcon>,
  },
  {
    title: "Portofolio",
    logo: <DocumentTextIcon className="fill-current"></DocumentTextIcon>,
  },
  {
    title: "Media",
    logo: <UserIcon className="fill-current"></UserIcon>,
  },
];

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const [isMeanuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav>
      {!isMeanuToggled && (
        <motion.div
          className="fixed top-0 z-[20] h-screen w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0.75, x: 30 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="mx-auto flex h-screen justify-end">
            <button
              className="group items-center border-4 border-white bg-white transition duration-500 hover:border-l-gray-500  hover:bg-slate-300 sm:px-1 l:px-2"
              onClick={() => setIsMenuToggled(!isMeanuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-black group-hover:sm:mx-2  group-hover:l:mx-4" />
            </button>
          </div>
        </motion.div>
      )}

      {/* MENU */}
      {isMeanuToggled && (
        <div className="fixed z-[49] h-screen w-screen">
          <motion.div
            className="fixed top-0 z-[49] h-screen w-screen bg-black opacity-80"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 0.8 },
            }}
            onClick={() => setIsMenuToggled(!isMeanuToggled)}
          ></motion.div>
          <motion.div
            className="fixed bottom-0 right-0 z-[50] h-full w-[300px] bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0.75, x: 150 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* Close ICON */}
            <div className="flex justify-end p-10">
              <button
                className="rounded-lg border-2 border-gray-400 text-gray-400 transition duration-500 hover:border-gray-600 hover:text-gray-600"
                onClick={() => setIsMenuToggled(!isMeanuToggled)}
              >
                <XMarkIcon className="h-6 w-6 fill-current "></XMarkIcon>
              </button>
            </div>

            {/* MENU */}
            <div className={`ml-[20%] flex flex-col gap-2 text-2xl`}>
              {data_nav_bar.map((data: datanavbartype) => {
                return (
                  <Link
                    page={data.title}
                    logo={data.logo}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled={setIsMenuToggled}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
