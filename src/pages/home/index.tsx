import { cn } from "@/lib/utils";
import { HomePhoto } from "./photo";

interface HomeProps{
    cssBorder:string;
}

export default function Home({cssBorder}:HomeProps) {
    return(
        <div className={cn(cssBorder,"")}>
            <HomePhoto />
        </div> 
    )
}