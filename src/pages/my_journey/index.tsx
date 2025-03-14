import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

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
                <CardContent>
                    
                </CardContent>
            </Card>
        </div>
    )
}