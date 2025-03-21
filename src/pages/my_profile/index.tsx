import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";


interface MyProfileProps{
    cssBorder:string;
}

export default function MyProfile({cssBorder}:MyProfileProps) {
    return(
        <div className={cn(cssBorder,"")}>
            <Card>
                
            </Card>
        </div> 
    )
}