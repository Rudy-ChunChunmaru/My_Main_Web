import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Profile } from "./profile";
import { About } from "./about";
import { Info } from "./info";


interface MyProfileProps{
    cssBorder:string;
}

export default function MyProfile({cssBorder}:MyProfileProps) {
    return(
        <div className={cn(cssBorder,"")}>
            <Card className="bg-[#ffffff05] w-[100%] h-[85vh] py-10 px-3">
                <CardContent className="w-[100%] h-fit flex justify-between">
                    <Profile />
                    <Info />
                </CardContent>
                <CardContent className="w-[100%] h-fit">
                    <About />
                </CardContent>
            </Card>
        </div> 
    )
}