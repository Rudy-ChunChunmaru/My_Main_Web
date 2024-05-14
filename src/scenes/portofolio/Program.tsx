//photo logo

type dataprogramdetailtype = {
  info: string;
  photo: JSX.Element;
};

type dataprogramtype = {
  id: string;
  title: string;
  info: string;
  time: string;
  detail: dataprogramdetailtype[];
};

const data_program: dataprogramtype[] = [
  {
    id: "01",
    title: "Project Codeigniter, Jquery and MySQL",
    info: "",
    time: "2023",
    detail: [
      {
        info: "",
        photo: <img alt="logo codeigniter" />,
      },
    ],
  },
];

const Program = () => {
  return (
    <div className="w-full flex-row">
      <div className="relative -left-2 mb-3 rounded-bl-lg border-b-2 border-l-2 border-slate-800 p-2">
        Program
      </div>
      {data_program.map((data: dataprogramtype) => {
        return (
          <div className="flex justify-start gap-4 rounded-lg border-2 border-slate-800 p-2">
            <div className="flex flex-col">
              <div>{data.title}</div>
              <div>{data.time}</div>
            </div>
            <div></div>
          </div>
        );
      })}
    </div>
  );
};

export default Program;
