import { cn } from "@/lib/utils";
import Dashboard from "@/pages/dashboard";
import Home from "@/pages/home";
import MyJourney from "@/pages/my_journey";

export function IndexPage() {
    const cssBorder = cn("mx-auto w-[95%] bg-[#ffffff1a] rounded-xl p-2")

    return(
        <Dashboard>
            <div className="flex flex-col gap-10 h-full w-full pt-10">
                <div id="home" className="h-full w-full">
                    <Home cssBorder={cssBorder} />
                </div>
                <div id="MyJourney" className="h-full w-full">
                    <MyJourney cssBorder={cssBorder} />
                </div>
            </div>
        </Dashboard>
    )
}