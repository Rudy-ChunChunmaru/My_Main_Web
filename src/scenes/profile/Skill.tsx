import Skill_detail from "./Skill_detail";
import { data_skill } from "@/shared/data_profile";

const Sub_Skill = data_skill.map((data, index) => {
  return (
    <Skill_detail
      times={index + 1}
      kategori={data.katergori}
      setskill={data.setskill}
    ></Skill_detail>
  );
});

const Skill = () => {
  return (
    <div className="w-full flex-row">
      <div className="relative -left-2 rounded-bl-lg border-b-2 border-l-2 p-2">
        Skill
      </div>
      <div className="w-full flex-row gap-5 py-3 md:flex">{Sub_Skill}</div>
    </div>
  );
};

export default Skill;
