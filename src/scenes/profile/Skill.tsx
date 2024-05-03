import Skill_detail from "./Skill_detail";

type dataskilltype = {
  katergori: string;
  setskill: {
    title: string;
    point: number;
  }[];
};

const dataskill: dataskilltype[] = [
  {
    katergori: "Programing Language",
    setskill: [
      { title: "C++", point: 6 },
      { title: "C", point: 3 },
      { title: "php", point: 6 },
      { title: "python", point: 7 },
      { title: "HTML", point: 9 },
      { title: "Javasciprt", point: 6 },
      { title: "TypeScript", point: 6 },
      { title: "SQL", point: 6 },
    ],
  },
  {
    katergori: "Framework",
    setskill: [
      { title: "ardunio and Esp", point: 6 },
      { title: "codeigniter", point: 6 },
      { title: "Django and Rest Framework", point: 7 },
      { title: "Nestjs", point: 4 },
      { title: "Reactjs", point: 5 },
    ],
  },
  {
    katergori: "Tool",
    setskill: [
      { title: "Eagle", point: 6 },
      { title: "Fusion 360", point: 6 },
      { title: "VS Code", point: 7 },
    ],
  },
];

const Sub_Skill = dataskill.map((data, index) => {
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
      <div className="w-full flex-row gap-5 py-3 sm:flex">{Sub_Skill}</div>
    </div>
  );
};

export default Skill;
