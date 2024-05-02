type dataskilltype = {
  katergori: string;
  setskill: {
    title: string;
    point: number;
  }[];
};

const dataskill: dataskilltype[] = [
  {
    katergori: "Programing",
    setskill: [
      {
        title: "python",
        point: 7,
      },
      {
        title: "C++",
        point: 5,
      },
    ],
  },
];

const Skill = () => {
  return (
    <div className="w-full flex-row">
      <div className="relative -left-2 rounded-bl-lg border-b-2 border-l-2 p-2">
        Skill
      </div>
      <div className="flex w-full"></div>
    </div>
  );
};

export default Skill;
