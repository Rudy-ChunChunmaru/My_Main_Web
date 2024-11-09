import { motion } from "framer-motion";

type Props = {
  point: number;
  durasi: number;
};

const Skill_detail_point = ({ point, durasi }: Props) => {
  return (
    <div className="g-1 relative -left-1 flex w-fit rounded-xl border-b-2 border-r-2 border-slate-300 p-1 pl-2">
      {(() => {
        const bardiv = [];
        for (let i = 0; i < point; i++) {
          bardiv.push(
            <motion.div
              className="m-1 h-2 w-5 rounded-sm bg-slate-500 xl:w-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.03 * durasi * (i + 1) }}
              variants={{
                hidden: { opacity: 0, x: -2 * durasi * (i + 1) },
                visible: { opacity: 1, x: 0 },
              }}
            >
              &nbsp;
            </motion.div>
          );
        }
        return bardiv;
      })()}

      {(() => {
        const bardiv = [];
        for (let i = 0; i < 10 - point; i++) {
          bardiv.push(
            <motion.div
              className="m-1 h-2 w-5 rounded-sm border-2 border-slate-500 xl:w-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.03 * durasi * (point + (i + 1)) }}
              variants={{
                hidden: { opacity: 0, x: -2 * durasi * (point + (i + 1)) },
                visible: { opacity: 1, x: 0 },
              }}
            >
              &nbsp;
            </motion.div>
          );
        }
        return bardiv;
      })()}
    </div>
  );
};

export default Skill_detail_point;
