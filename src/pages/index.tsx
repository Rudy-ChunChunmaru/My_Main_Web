import { cn } from "@/lib/utils";
import Dashboard from "@/pages/dashboard";
import MyProfile from "@/pages/my_profile";
import MyJourney from "@/pages/my_journey";
import MyPortofolio from "@/pages/my_portofolio";
import MyMedia from "@/pages/my_media";

export function IndexPage() {
    const cssBorder = cn("mx-auto w-[95%] bg-[#ffffff1a] rounded-xl p-2")

    return(
        <Dashboard>
            <div id="home" className="flex flex-col gap-5 h-full w-full pt-10 pb-5">
                <div id="MyProfile" className="h-full w-full">
                    <MyProfile cssBorder={cssBorder} />
                </div>
                <div id="MyJourney" className="h-full w-full">
                    <MyJourney cssBorder={cssBorder} />
                </div>
                <div id="MyPortofolio" className="h-full w-full">
                    <MyPortofolio cssBorder={cssBorder} />
                </div>
                <div id="MyMedia" className="h-full w-full">
                    <MyMedia cssBorder={cssBorder} />
                </div>
            </div>
        </Dashboard>
    )
}