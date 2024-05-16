import Program_detail from "./Program_detail";

import { data_program, dataProgramType } from "@/shared/data_portofolio";

type Props = {
  IsLookToDetail: (value: boolean) => void;
  SetLookToDetailJSX: (value: JSX.Element) => void;
};

const Program = ({ IsLookToDetail, SetLookToDetailJSX }: Props) => {
  return (
    <div className="w-full flex-row">
      <div className="relative -left-2 mb-3 rounded-bl-lg border-b-2 border-l-2 border-slate-800 p-2">
        <strong>Program</strong>
      </div>
      {data_program.map((data: dataProgramType) => {
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
              <div>
                <p>{data.info}</p>
              </div>
            </div>

            {/* DETAIL */}
            <Program_detail
              photodetailimage={data.photodetail}
              IsLookToDetail={IsLookToDetail}
              SetLookToDetailJSX={SetLookToDetailJSX}
            ></Program_detail>
          </div>
        );
      })}
    </div>
  );
};

export default Program;
