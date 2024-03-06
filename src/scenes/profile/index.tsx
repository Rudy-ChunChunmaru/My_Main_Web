import { TypeSelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: TypeSelectedPage) => void;
};

const Profile = ({ setSelectedPage }: Props) => {
  return (
    <motion.section
      id="profile"
      className="z-10 mt-20 h-fit w-full "
      onViewportEnter={() => setSelectedPage(TypeSelectedPage.Profile)}
    >
      <div className="mx-auto  w-10/12 rounded-md bg-slate-300 p-1 sm:p-3 md:p-5">
        <div className="rounded-md bg-slate-800 p-3">lol</div>
      </div>
    </motion.section>
  );
};

export default Profile;
