import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  MapPinIcon,
  UserIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";

import Experience_detail_expan_no from "./Experience_detail_expan_no";

import { dataExperinceDetailType } from "@/shared/data_profile";

type Props = {
  times: number;
  title: string;
  info: string;
  periode: string;
  location: string;
  detail: dataExperinceDetailType[];
  logo: string;
};

const Experience_detail = ({
  times,
  title,
  info,
  periode,
  location,
  detail,
  logo,
}: Props) => {
  const [dataExpan, setdataExpan] = useState<boolean>(false);

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
      viewport={{ once: true }}
      transition={{ duration: 0.3 * times }}
      variants={{
        hidden: { opacity: 0, y: -25 * times },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="h-28 sm:h-14">
        <button
          className="relative z-[20] h-full rounded-md border-2 align-top hover:bg-gray-500"
          onClick={() => setdataExpan(!dataExpan)}
        >
          {!dataExpan && <ArrowDownIcon className="w-6"></ArrowDownIcon>}
          {dataExpan && <ArrowUpIcon className="w-6"></ArrowUpIcon>}
        </button>
      </div>

      <div className="w-full flex-row pl-3 ">
        {/* Head info */}
        <div className="flex justify-between">
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
          <div className="h-16 w-16 rounded-xl bg-white p-1">
            <img src={logo} alt={logo} />
          </div>
        </div>

        {/* all info */}
        {dataExpan && (
          <div className="flex">
            <div className="mr-3 w-2 rounded-xl bg-yellow-400">&nbsp;</div>

            <div className="w-full flex-col justify-start">
              {detail.map((datadetail: dataExperinceDetailType, index) => {
                return (
                  <motion.div
                    className={
                      "my-1 flex w-full justify-start rounded-md " +
                      classnamediv(datadetail.doing)
                    }
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.1 * index }}
                    variants={{
                      hidden: { opacity: 0.75, y: -25 * index },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <div className="hidden w-20  pl-3 md:block">
                      {datadetail.time}
                    </div>
                    <div className="hidden w-36 sm:block ">
                      {datadetail.doing}
                    </div>
                    <div className="pr-3">{datadetail.info}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* just one info */}
        {!dataExpan && (
          <Experience_detail_expan_no
            detail={detail}
          ></Experience_detail_expan_no>
        )}
      </div>
    </motion.div>
  );
};

export default Experience_detail;
