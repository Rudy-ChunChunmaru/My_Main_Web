import { TypeSelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Experience from "./Experience";

type Props = {
  setSelectedPage: (value: TypeSelectedPage) => void;
};

const Profile = ({ setSelectedPage }: Props) => {
  return (
    <motion.section
      id="profile"
      className="z-40 mt-5 h-fit w-full"
      onViewportEnter={() => setSelectedPage(TypeSelectedPage.Profile)}
    >
      <div className="mx-auto w-full bg-slate-300 p-1 sm:p-3 md:p-5">
        <div className="mx-auto ml-5 w-11/12 flex-row">
          <div className="mb-2 rounded-md bg-slate-800 py-5 text-center">
            MY PROFILE
          </div>

          <div className="mb-2 flex rounded-md bg-slate-800 p-5">
            <Experience></Experience>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Profile;
