import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { dataExperinceDetailType } from "@/shared/data_profile";
type Props = { detail: dataExperinceDetailType[] };

const Experience_detail_expan_no = ({ detail }: Props) => {
  const classnamediv = function (doing: string): string {
    if (doing == "Training") return "bg-red-900";
    if (doing == "Activity") return "bg-yellow-700";
    if (doing == "Project") return "bg-neutral-600";
    else return "bg-slate-600";
  };
  let numword = 0;
  const [datadetail, setdatadetail] = useState(detail[numword]);

  useEffect(() => {
    let longcounter = 4000;

    const interval = setInterval(() => {
      numword++;
      if (numword >= detail.length) numword = 0;
      setdatadetail(detail[numword]);
    }, longcounter);
    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      className="flex w-full rounded-md bg-slate-300 p-1 text-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0.25, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div
        className={
          "hidden w-[15%] rounded-md px-1 text-center text-white sm:block" +
          classnamediv(datadetail.doing)
        }
      >
        {datadetail.time} - {datadetail.doing}
      </div>
      <div className="flex w-full justify-between">
        <div className="pl-2">{datadetail.info}</div>
      </div>
    </motion.div>
  );
};

export default Experience_detail_expan_no;
