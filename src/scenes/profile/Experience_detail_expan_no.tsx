import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = { detail: detailtype[] };
type detailtype = {
  time: number;
  doing: string;
  info: string;
  link: string;
};

const Experience_detail_expan_no = ({ detail }: Props) => {
  const classnamediv = function (doing: string): string {
    if (doing == "Training") return "bg-red-900";
    if (doing == "Activity") return "bg-yellow-700";
    if (doing == "Project") return "bg-neutral-600";
    else return "bg-slate-600";
  };
  let numword = 0;
  let numcounter = 0;
  const [datadetail, setdatadetail] = useState(detail[numword]);
  const [counter, setcounter] = useState(0);
  useEffect(() => {
    let longcounter = 4000;

    const intervalcounter = setInterval(() => {
      numcounter++;
      if (numcounter >= longcounter / 1000) numcounter = 0;
      setcounter(numcounter);
    }, 1000);

    const interval = setInterval(() => {
      numword++;
      if (numword >= detail.length) numword = 0;
      setdatadetail(detail[numword]);
    }, longcounter);
    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalcounter);
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
      {/* <span className="text-center font-Protest_Riot text-3xl">
        {datadetail.info}
      </span> */}
      <div
        className={
          "hidden rounded-md px-1 text-white sm:block " +
          classnamediv(datadetail.doing)
        }
      >
        {datadetail.doing}
      </div>
      <div className="flex w-full justify-between">
        <div className="pl-2">{datadetail.info}</div>
        <div className="pl-2">
          {counter == 0 && (
            <div className="h-6 w-6 animate-spin rounded-full border-b-4 border-black">
              I
            </div>
          )}
          {counter == 1 && (
            <div className="h-6 w-6 animate-spin rounded-full border-b-4 border-l-4 border-black">
              II
            </div>
          )}
          {counter == 2 && (
            <div className="h-6 w-6 animate-spin rounded-full border-b-4 border-l-4 border-t-4 border-black">
              III
            </div>
          )}
          {counter == 3 && (
            <div className="h-6 w-6 animate-spin rounded-full border-4 border-black">
              IIII
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience_detail_expan_no;
