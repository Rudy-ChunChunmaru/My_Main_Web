import { TypeSelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: TypeSelectedPage) => void;
};

const ContactMe = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      id="contactme"
      className="z-40 w-full bg-slate-800 px-3 py-5"
      onViewportEnter={() => setSelectedPage(TypeSelectedPage.ContactMe)}
    >
      ContactMe
    </motion.div>
  );
};

export default ContactMe;
