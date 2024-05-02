import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  MapPinIcon,
  UserIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";

type detailtype = {
  time: number;
  doing: string;
  info: string;
  link: string;
};

type Props = {
  title: string;
  info: string;
  periode: string;
  location: string;
  detali: detailtype[];
};

const Experience_detail = ({
  title,
  info,
  periode,
  location,
  detali,
}: Props) => {
  const [dataExpan, setdataExpan] = useState<boolean>(false);
  let rnd = Math.floor(Math.random() * detali.length);

  const classnamediv = function (doing: string): string {
    if (doing == "Training") return "bg-red-900";
    if (doing == "Activity") return "bg-yellow-700";
    if (doing == "Project") return "bg-neutral-600";
    else return "bg-slate-600";
  };

  return (
    <motion.div
      className="mt-3 flex rounded-md border-2 border-indigo-300 p-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="h-28 sm:h-14">
        <button
          className="relative z-0 h-full rounded-md border-2 align-top hover:bg-gray-500 "
          onClick={() => setdataExpan(!dataExpan)}
        >
          {!dataExpan && <ArrowDownIcon className="w-6"></ArrowDownIcon>}
          {dataExpan && <ArrowUpIcon className="w-6"></ArrowUpIcon>}
        </button>
      </div>

      <div className="w-full flex-row pl-3 ">
        {/* Head info */}
        <div className="h-28 flex-col justify-between sm:h-14">
          <div>{title}</div>
          <div className="flex-row gap-5 sm:flex">
            <div className="flex">
              <UserIcon className="w-5"></UserIcon>&nbsp;{info}{" "}
            </div>
            <div className="flex">
              <CalendarIcon className="w-5"></CalendarIcon>&nbsp;{periode}
            </div>
            <div className="flex">
              <MapPinIcon className="w-5"></MapPinIcon>&nbsp;{location}
            </div>
          </div>
        </div>

        {/* all info */}
        {dataExpan && (
          <div className="flex">
            <div className="mr-3 w-2 rounded-xl bg-yellow-400">&nbsp;</div>

            <div className="w-full flex-col justify-start">
              {detali.map((datadetail: detailtype) => {
                return (
                  <div
                    className={
                      "my-1 flex w-full justify-start rounded-md " +
                      classnamediv(datadetail.doing)
                    }
                  >
                    <div className="hidden w-20  pl-3 md:block">
                      {datadetail.time}
                    </div>
                    <div className="hidden w-36 sm:block ">
                      {datadetail.doing}
                    </div>
                    <div className="pr-3">{datadetail.info}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* just one info */}
        {!dataExpan && (
          <div className="flex w-full rounded-md bg-slate-300 p-2 text-black">
            <div
              className={
                "rounded-md px-2 text-white " + classnamediv(detali[rnd].doing)
              }
            >
              {detali[rnd].doing}
            </div>
            <div className="pl-2">{detali[rnd].info}</div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Experience_detail;
