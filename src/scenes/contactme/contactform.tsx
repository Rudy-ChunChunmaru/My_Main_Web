import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
// import { useState } from "react";

// untuk cek input pada Form
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    trigger,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const errormessageview: (message: string) => JSX.Element = (message) => {
    return (
      <motion.div
        className="relative bottom-3 w-full rounded-lg border-2 border-red-600 bg-white "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <div className="my-auto flex w-full justify-between pl-1">
          <div className="text-red-500">
            <strong>{message}</strong>
          </div>
          <div className="w-7 bg-red-600 text-white">
            <ExclamationCircleIcon></ExclamationCircleIcon>
          </div>
        </div>
      </motion.div>
    );
  };

  const sendEmail = async (event: any) => {
    //This is important, i'm not sure why, but the email won't send without it
    event.preventDefault();

    const Isvalid = await trigger();

    if (Isvalid) {
      // parameter
      const SERVICE_ID = "service_h00pj9i";
      const TEMPLATE_ID = "template_qqopk77";
      const TEMPLATE_PARAMS = {
        from_title: "MY_MAIN_WEB - Message - " + getValues("from_email"),
        from_name: getValues("from_name"),
        from_email: getValues("from_email"),
        from_message: getValues("from_message"),
      };
      const USER_ID = "Je0IIZkyQ11JSYHRx";

      emailjs.send(SERVICE_ID, TEMPLATE_ID, TEMPLATE_PARAMS, USER_ID).then(
        (result) => {
          console.log("berhasil terkirim! <br>", result);
          setValue("from_name", "");
          setValue("from_email", "");
          setValue("from_message", "");
        },
        (error) => {
          console.log("gagal terkirim! <br>", error.text);
          alert("gagal terkirim! <br>" + error.text);
        }
      );
    }
  };

  return (
    <div className=" mx-auto mb-2 w-full rounded-md bg-slate-300 px-5 py-7 sm:w-10/12">
      <form
        target="_blank"
        method="POST"
        onSubmit={sendEmail}
        className="m-auto mb-3 flex w-full flex-wrap gap-3 px-5"
      >
        <input
          type="text"
          className="relative z-0 w-full rounded-lg px-2 py-1"
          placeholder="Name"
          {...register("from_name", {
            required: true,
            maxLength: 30,
          })}
        />
        {errors.from_name &&
          errors.from_name.type === "required" &&
          errormessageview("This field is required.")}
        {errors.from_name &&
          errors.from_name.type === "maxLength" &&
          errormessageview("Max Length is 30 char")}

        <input
          type="text"
          className="relative z-0 w-full rounded-lg px-2 py-1"
          placeholder="Email"
          {...register("from_email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
            maxLength: 30,
          })}
        />
        {errors.from_email &&
          errors.from_email.type === "required" &&
          errormessageview("This field is required.")}
        {errors.from_email &&
          errors.from_email.type === "pattern" &&
          errormessageview("Invalid email address.")}
        {errors.from_email &&
          errors.from_email.type === "maxLength" &&
          errormessageview("Max Length is 30 char")}

        <textarea
          className="relative z-0 h-24 w-full rounded-lg px-2 py-1"
          placeholder="Message"
          {...register("from_message", {
            required: true,
            maxLength: 1000,
          })}
        ></textarea>
        {errors.from_message &&
          errors.from_message.type === "required" &&
          errormessageview("This field is required.")}
        {errors.from_message &&
          errors.from_message.type === "maxLength" &&
          errormessageview("Max Length is 1000 char.")}

        <div className="flex w-full justify-center">
          <strong>
            <input
              type="submit"
              value="Form Submit"
              className="relative z-0 rounded-lg border-2 border-slate-900 p-2 hover:border-slate-600 hover:bg-slate-400"
            />
          </strong>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
