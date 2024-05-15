import Program_detail from "./Program_detail";

//photo
import { image_01 } from "@/shared/asset_portofolio_image";

type dataprogramtype = {
  title: string;
  info: JSX.Element;
  time: string;
  photodetail: string[];
};

const data_program: dataprogramtype[] = [
  {
    title: "Project Exim Codeigniter, Jquery and MySQL",
    info: (
      <p>
        &nbsp;&nbsp;&nbsp;On this project web application, The application aims
        to record exports and imports produced by the company and carry out
        price changes, create invoices and reports to customs on export-import
        goods. This application helps companies speed up the delivery of goods
        and licensing and billing and record sales.
        <br></br>
      </p>
    ),
    time: "2023",
    photodetail: image_01,
  },
];

const Program = () => {
  return (
    <div className="w-full flex-row">
      <div className="relative -left-2 mb-3 rounded-bl-lg border-b-2 border-l-2 border-slate-800 p-2">
        <strong>Program</strong>
      </div>
      {data_program.map((data: dataprogramtype) => {
        return (
          <div className="flex w-full flex-col justify-between rounded-lg border-2 border-slate-800 p-2 md:w-full md:flex-row">
            <div className="flex w-[100%]  flex-col md:w-[60%]">
              {/* HEAD */}
              <div className="flex justify-start gap-1 rounded-lg bg-zinc-500 p-1">
                <div className="w-fix my-auto rounded-lg bg-slate-600 px-2">
                  <strong>{data.time}</strong>
                </div>
                <div className="p-1">
                  <strong>{data.title}</strong>
                </div>
              </div>
              {/* INFO */}
              <div>{data.info}</div>
            </div>

            {/* DETAIL */}
            <Program_detail
              photodetailimage={data.photodetail}
            ></Program_detail>
          </div>
        );
      })}
    </div>
  );
};

export default Program;
