import { TypeSelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactForm from "./contactform";

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
      <div className="mx-auto ml-3 w-11/12 flex-row text-black">
        <div className="mx-auto mb-2 w-full rounded-md bg-slate-300 py-5 text-center sm:w-10/12">
          <strong>Leave me Message</strong>
        </div>
        <ContactForm></ContactForm>
      </div>
    </motion.div>
  );
};

export default ContactMe;
