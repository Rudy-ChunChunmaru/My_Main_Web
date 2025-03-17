import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skill } from "./skill";
import { Language } from "./language";

interface MyProtofolioProps {
    cssBorder:string
}

export default function MyProtofolio({cssBorder}:MyProtofolioProps) {
    return(
        <div className={cn(cssBorder,"")}>
            <Card className="shadow-xl">
                <CardHeader>
                    <CardTitle>My Protofolio</CardTitle>
                    <Separator className="bg-gray-500" />
                </CardHeader>
                <CardContent key="Project">

                </CardContent>
                <CardContent key="Skill">
                    <Skill />
                </CardContent>
                <CardContent key="Language">
                    <Language />
                </CardContent>
            </Card>
        </div>
    )
}