import ProfilePhoto from "@/assets/profile.jpg";
import { useEffect, useState } from "react";
// loading
import RiseLoader from "react-spinners/RiseLoader";

export function Profile(){
    const [image, setImage] = useState<any>();

    useEffect(() => {
      import("@/assets/profile.jpg").then(setImage);
    });
  
    if (image != undefined) {
      return (
        <div className="group relative mx-auto w-48 l:w-60 xxl:w-64">
          <div className="absolute z-[0] m-auto w-full border-8 border-slate-300 bg-transparent pt-1 blur-lg">
            <img className="" alt="foto profile" src={ProfilePhoto}></img>
          </div>
          <div className="relative z-[10] m-auto w-[90%] rounded-lg border-4 border-slate-300 bg-transparent pt-1 blur-none">
            <img className="rounded-lg" alt="foto profile" src={ProfilePhoto}></img>
          </div>
        </div>
      );
    }
    return (
      <div className="group relative mx-auto w-48 l:w-60 xxl:w-64">
        <RiseLoader color="hsla(180, 3%, 19%, 1)" speedMultiplier={1} />
      </div>
    );
}