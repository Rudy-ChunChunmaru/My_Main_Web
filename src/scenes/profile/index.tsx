import { TypeSelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: TypeSelectedPage) => void;
};

const Profile = ({ setSelectedPage }: Props) => {
  return (
    <motion.section
      id="profile"
      className="z-40 mt-10 h-fit w-full"
      onViewportEnter={() => setSelectedPage(TypeSelectedPage.Profile)}
    >
      <div className="mx-auto w-full bg-slate-300 p-1 sm:p-3 md:p-5">
        <div className="flex-row justify-start rounded-md bg-slate-800 py-5">
          <div className="w-full text-center">MY PROFILE</div>
          <div className="flex w-full"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Profile;
