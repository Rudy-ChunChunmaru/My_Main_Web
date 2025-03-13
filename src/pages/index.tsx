import Dashboard from "@/pages/dashboard";
import Home from "./home";

export function IndexPage() {
    return(
        <Dashboard>
            <div className="flex flex-col h-full w-full">
                <div id="home" className="h-full w-full">
                    <Home />
                </div>
            </div>
        </Dashboard>
    )
}