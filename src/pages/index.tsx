import { cn } from "@/lib/utils";
import Dashboard from "@/pages/dashboard";
import MyProfile from "@/pages/my_profile";
import MyJourney from "@/pages/my_journey";
import MyPortofolio from "@/pages/my_portofolio";
import MyMedia from "@/pages/my_media";

export function IndexPage() {
    const cssBorder = cn(
        "w-[100%] sm:mx-auto sm:w-[95%] bg-[#ffffff1a] rounded-xl ",
        "p-0 md:p-1 xl:p-2",
        "text-[0.65rem] sm:text-[0.75rem] md:text-[0.85rem] l:text-[0.95rem] xl:text-[1.1rem] xxl:text-[1.5rem]"   
    )
    
    return(
        <Dashboard>
            <div key={1} id="home" className="flex flex-col gap-5 h-fit w-full pt-10 pb-5">
                <div id="MyProfile">
                    <MyProfile cssBorder={cssBorder} />
                </div>
                <div id="MyJourney">
                    <MyJourney cssBorder={cssBorder} />
                </div>
                <div id="MyPortofolio">
                    <MyPortofolio cssBorder={cssBorder} />
                </div>
                <div id="MyMedia">
                    <MyMedia cssBorder={cssBorder} />
                </div>
            </div>
        </Dashboard>
    )
}