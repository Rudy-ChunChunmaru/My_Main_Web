import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Education } from "./education";
import { Experiences } from "./experience";
import { Certification } from "./certification";

interface MyJourneyProps{
    cssBorder:string
}

export default function MyJourney({cssBorder}:MyJourneyProps) {
    return(
        <div className={cn(cssBorder,"")}>
            <Card className="shadow-xl">
                <CardHeader>
                    <CardTitle>My Journey</CardTitle>
                    <Separator className="bg-gray-500" />
                </CardHeader>
                <CardContent key="Education">
                    <Education />
                </CardContent>
                <CardContent key="Experiences">
                    <Experiences />
                </CardContent>
                <CardContent key="Certification">
                    <Certification />
                </CardContent>
            </Card>
        </div>
    )
}