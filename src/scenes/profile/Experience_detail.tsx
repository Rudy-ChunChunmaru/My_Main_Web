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
      className="relative mt-3 grid h-auto grid-cols-12 rounded-md border-2 border-indigo-300 p-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 * times }}
      variants={{
        hidden: { opacity: 0, y: -25 * times },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="col-span-1 h-full w-full">
        <div
          className="relative z-[20] m-auto flex h-[90%] w-[90%] justify-center rounded-md border-2 align-top hover:bg-gray-500"
          onClick={() => setdataExpan(!dataExpan)}
        >
          {!dataExpan && <ArrowDownIcon className="w-6" />}
          {dataExpan && <ArrowUpIcon className="w-6" />}
        </div>
      </div>

      <div className="relative col-span-11 grid h-fit w-full grid-cols-1 pl-3 ">
        {/* Head info */}
        <div className="flex justify-between">
          <div className="my-auto  h-fit flex-col justify-between">
            <div>{title}</div>
            <div className="flex-row md:flex md:gap-5">
              <div className="flex">
                <UserIcon className="w-5" />
                &nbsp;{info}{" "}
              </div>
              <div className="flex">
                <CalendarIcon className="w-5"></CalendarIcon>&nbsp;{periode}
              </div>
              <div className="flex">
                <MapPinIcon className="w-5"></MapPinIcon>&nbsp;{location}
              </div>
            </div>
          </div>
          <div className="z-[20] w-20 rounded-xl bg-white p-2 duration-200 md:hover:w-28 xl:w-28 xl:hover:w-32">
            <img
              className="mx-auto my-auto h-[100%] w-[100%]"
              src={logo}
              alt={logo}
            />
          </div>
        </div>
      </div>

      <div className="col-span-12">
        {/* all info */}
        {dataExpan && (
          <div className="flex">
            <div className="mr-3 w-2 rounded-xl bg-yellow-400">&nbsp;</div>
            <div className="w-full flex-col justify-start">
              {detail.map((datadetail: dataExperinceDetailType, index) => {
                return (
                  <motion.div
                    className={
                      "my-1 grid w-full grid-cols-12 justify-start rounded-md " +
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
                    <div className="hidden pl-3 md:col-span-1 md:block">
                      {datadetail.time}
                    </div>
                    <div className="hidden xs:col-span-2 xs:block">
                      {datadetail.doing}
                    </div>
                    <div className="col-span-full xs:col-span-10 md:col-span-9">
                      {datadetail.info}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* just one info */}
        {!dataExpan && <Experience_detail_expan_no detail={detail} />}
      </div>
    </motion.div>
  );
};

export default Experience_detail;
