import emailjs from "emailjs-com";
import { useState } from "react";

const ContactForm = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [message, SetMessage] = useState("");

  const cekFormInput: () => boolean = () => {
    return false;
  };

  const sendEmail = (e: any) => {
    const valid: { status: boolean; error_message: string } = {
      status: cekFormInput(),
      error_message: "sory, is not ready to send message !!!",
    };

    if (valid.status) {
      //This is important, i'm not sure why, but the email won't send without it
      e.preventDefault();

      // parameter
      const SERVICE_ID = "service_h00pj9i";
      const TEMPLATE_ID = "template_qqopk77";
      const TEMPLATE_PARAMS = {
        from_title: "MY_MAIN_WEB - Message - " + email,
        from_name: name,
        from_email: email,
        from_message: message,
      };
      const USER_ID = "Je0IIZkyQ11JSYHRx";

      emailjs.send(SERVICE_ID, TEMPLATE_ID, TEMPLATE_PARAMS, USER_ID).then(
        (result) => {
          console.log("berhasil terkirim! <br>", result);
          SetName("");
          SetEmail("");
          SetMessage("");
        },
        (error) => {
          console.log("gagal terkirim! <br>", error.text);
        }
      );
    } else {
      alert(valid.error_message);
    }
  };

  return (
    <div className=" mx-auto mb-2 w-10/12 rounded-md bg-slate-300 px-5 py-7">
      <form
        onSubmit={sendEmail}
        className="m-auto mb-3 flex w-full flex-wrap gap-5 px-5"
      >
        <input
          type="text"
          className="relative z-0 w-full rounded-lg px-2 py-1"
          name="from_name"
          placeholder="Name"
          onChange={(e) => SetName(e.target.value)}
        />
        <input
          type="email"
          className="relative z-0 w-full rounded-lg px-2 py-1"
          name="from_email"
          placeholder="Email"
          onChange={(e) => SetEmail(e.target.value)}
        />
        <textarea
          className="relative z-0 h-24 w-full rounded-lg px-2 py-1"
          name="html_message"
          placeholder="Message"
          onChange={(e) => SetMessage(e.target.value)}
        ></textarea>
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
