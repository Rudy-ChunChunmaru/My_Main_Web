import Skill_detail_point from "./Skill_detail_point";

type setskilltype = {
  title: string;
  point: number;
};

type Props = {
  times: number;
  kategori: string;
  setskill: setskilltype[];
};

const Skill_detail = ({ times, kategori, setskill }: Props) => {
  console.log(times);
  console.log(setskill);
  return (
    <div className="mb-3 w-full flex-row rounded-md border-2 border-slate-300 sm:w-5/12">
      <div className="rounded-sm bg-slate-300 p-1 text-black">{kategori}</div>
      <div className="flex-row px-1 py-2">
        {setskill.map((data: setskilltype) => {
          return (
            <div className="-ml-1 rounded-lg border-l-2 border-t-2">
              <div className="pl-3">{data.title}</div>
              <Skill_detail_point point={data.point}></Skill_detail_point>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill_detail;
