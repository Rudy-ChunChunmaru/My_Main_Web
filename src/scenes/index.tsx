import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Profile from "@/scenes/profile";
import Portofolio from "@/scenes/portofolio";
import Media from "@/scenes/media";
import Bottom from "@/scenes/bottom";
import { useState } from "react";
import { TypeSelectedPage } from "@/shared/types";
import "./index.css";

export function Index() {
    const [selectedPage, setSelectedPage] = useState<TypeSelectedPage>(TypeSelectedPage.Home);
    return (
        <div className="scenes h-full w-full text-[0.65rem] sm:text-[0.75rem] md:text-[0.85rem] l:text-[0.95rem] xl:text-[1.1rem] xxl:text-[1.5rem]">
          <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    
          <Home setSelectedPage={setSelectedPage} />
    
          <Profile setSelectedPage={setSelectedPage} />
    
          <Portofolio setSelectedPage={setSelectedPage} />
    
          <Media setSelectedPage={setSelectedPage} />
    
          <Bottom />
        </div>
    )
}
