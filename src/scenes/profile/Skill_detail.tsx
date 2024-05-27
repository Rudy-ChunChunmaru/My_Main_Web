import Skill_detail_point from "./Skill_detail_point";
import { motion } from "framer-motion";
import { dataSkillSetSkillType } from "@/shared/data_profile";

type Props = {
  times: number;
  kategori: string;
  setskill: dataSkillSetSkillType[];
};

const Skill_detail = ({ times, kategori, setskill }: Props) => {
  return (
    <motion.div
      className="h-fit w-full flex-row rounded-md border-2 border-slate-300 md:w-5/12 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 * times }}
      variants={{
        hidden: { opacity: 0, x: -30 * times },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className="rounded-sm bg-slate-300 p-1 text-black">{kategori}</div>
      <div className="flex-row px-1">
        {setskill.map((data: dataSkillSetSkillType, index) => {
          return (
            <motion.div
              className="-ml-2 rounded-lg border-l-2 border-t-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 * times * (index + 1) }}
              variants={{
                hidden: { opacity: 0, y: -20 * times * (index + 1) },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="relative top-1 pl-3">{data.title}</div>
              <Skill_detail_point
                point={data.point}
                durasi={times * (index + 1)}
              ></Skill_detail_point>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skill_detail;
