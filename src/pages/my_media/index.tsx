import { cn } from "@/lib/utils";

interface MyMediaProps{
    cssBorder:string;
}

export default function MyMedia({cssBorder}:MyMediaProps) {
    return(
        <div className={cn(cssBorder,"")}>
            test
        </div>
    )
}