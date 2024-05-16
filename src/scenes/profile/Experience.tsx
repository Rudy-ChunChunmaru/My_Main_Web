import Experience_detail from "./Experience_detail";
import { data_experince } from "@/shared/data_profile";

const Sub_Experience = data_experince.map((data, index) => {
  return (
    <Experience_detail
      times={index}
      title={data.title}
      periode={data.periode}
      location={data.location}
      info={data.info}
      detail={data.detail}
      logo={data.logo}
    ></Experience_detail>
  );
});

const Experience = () => {
  return (
    <div className="w-full flex-row">
      <div className="relative -left-2 rounded-bl-lg border-b-2 border-l-2 p-2">
        Experience
      </div>
      {Sub_Experience}
    </div>
  );
};

export default Experience;
