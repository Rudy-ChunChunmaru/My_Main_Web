import { cn } from "@/lib/utils";
import { HomePhoto } from "./photo";

interface MyProfileProps{
    cssBorder:string;
}

export default function MyProfile({cssBorder}:MyProfileProps) {
    return(
        <div className={cn(cssBorder,"")}>
            <HomePhoto />
        </div> 
    )
}