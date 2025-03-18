import { cn } from "@/lib/utils";
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
  } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import { MediaContent } from "./media_content";


interface MyMediaProps{
    cssBorder:string;
}

export default function MyMedia({cssBorder}:MyMediaProps) {
    return(
        <div className={cn(cssBorder,"")}>
            <Card className="shadow-xl">
                <CardHeader>
                    <CardTitle>My Media</CardTitle>
                    <Separator className="bg-gray-500" />
                </CardHeader>
                <CardContent>
                    <MediaContent />
                </CardContent>
            </Card>
        </div>
    )
}