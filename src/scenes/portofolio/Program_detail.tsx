import { useState } from "react";

type Props = {
  photodetailimage: string[];
};

const Program_detail = ({ photodetailimage }: Props) => {
  const [photodetail, setphotodetail] = useState(0);
  const leftphotodetail: () => void = () => {
    if (photodetail > 0) setphotodetail(photodetail - 1);
    else setphotodetail(photodetailimage.length - 1);
  };
  const rightphotodetail: () => void = () => {
    if (photodetail >= photodetailimage.length - 1) setphotodetail(0);
    else setphotodetail(photodetail + 1);
  };

  return (
    <div className="flex  flex-row justify-between md:w-[40%] md:p-1">
      <div className="h-72 w-[5%]">
        <button
          className="relative  my-auto h-full w-full rounded-full border-2 border-gray-800 hover:bg-slate-500 md:top-[35%] md:h-[40%]"
          onClick={leftphotodetail}
        >
          {"<"}
        </button>
      </div>
      <div className="h-72 w-fit">
        <img className="h-72" src={photodetailimage[photodetail]} alt="" />
      </div>
      <div className="h-72 w-[5%]">
        <button
          className="relative  my-auto h-full w-full rounded-full border-2 border-gray-800 hover:bg-slate-500 md:top-[35%] md:h-[40%]"
          onClick={rightphotodetail}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Program_detail;
