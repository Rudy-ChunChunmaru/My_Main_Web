type Props = {
  point: number;
};

const Skill_detail_point = ({ point }: Props) => {
  console.log(point);
  return (
    <div className="g-1 relative -left-1 flex w-fit rounded-xl border-b-2 border-r-2 border-slate-300 p-1">
      <div className="m-1 h-1 w-5 rounded-sm bg-slate-600">&nbsp;</div>
      <div className="m-1 h-1 w-5 rounded-sm bg-slate-600">&nbsp;</div>
      <div className="m-1 h-1 w-5 rounded-sm bg-slate-600">&nbsp;</div>
      <div className="m-1 h-1 w-5 rounded-sm bg-slate-600">&nbsp;</div>
      <div className="m-1 h-1 w-5 rounded-sm bg-slate-600">&nbsp;</div>

      <div className="m-1 h-1 w-5 rounded-sm bg-slate-600">&nbsp;</div>
      <div className="m-1 h-1 w-5 rounded-sm bg-slate-600">&nbsp;</div>
      <div className="m-1 h-1 w-5 rounded-sm bg-slate-600">&nbsp;</div>
      <div className="m-1 h-1 w-5 rounded-sm bg-slate-600">&nbsp;</div>
      <div className="m-1 h-1 w-5 rounded-sm bg-slate-600">&nbsp;</div>
      <div className="m-1 h-1 w-5 rounded-sm bg-slate-600">&nbsp;</div>
    </div>
  );
};

export default Skill_detail_point;
