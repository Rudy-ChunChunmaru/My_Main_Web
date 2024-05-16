import { useState } from "react";

// icon
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

type Props = {
  photodetailimage: string[];
  IsLookToDetail: (value: boolean) => void;
  SetLookToDetailJSX: (value: JSX.Element) => void;
};

const Program_detail = ({
  photodetailimage,
  IsLookToDetail,
  SetLookToDetailJSX,
}: Props) => {
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
          className="relative z-[20] my-auto h-full w-full rounded-full border-2 border-gray-800 hover:bg-slate-500 md:top-[35%] md:h-[40%]"
          onClick={leftphotodetail}
        >
          <ArrowLongLeftIcon></ArrowLongLeftIcon>
        </button>
      </div>
      <div
        className="relative z-[20] h-72 w-fit"
        onClick={() => {
          IsLookToDetail(true);
          SetLookToDetailJSX(
            <div className="fixed top-[15%] z-[100] mx-[10%] h-fit w-[80%] bg-white">
              <img
                className="mx-auto h-1/5 sm:h-2/5 md:h-[50%]"
                src={photodetailimage[photodetail]}
                alt={`portofolio_image_` + photodetail}
              />
            </div>
          );
        }}
      >
        <img
          className="h-72"
          src={photodetailimage[photodetail]}
          alt={`portofolio_image_` + photodetail}
        />
      </div>
      <div className="h-72 w-[5%]">
        <button
          className="relative z-[20] my-auto h-full w-full rounded-full border-2 border-gray-800 hover:bg-slate-500 md:top-[35%] md:h-[40%]"
          onClick={rightphotodetail}
        >
          <ArrowLongRightIcon></ArrowLongRightIcon>
        </button>
      </div>
    </div>
  );
};

export default Program_detail;
