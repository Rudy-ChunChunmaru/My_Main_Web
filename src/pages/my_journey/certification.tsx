
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BadgeCheck } from "lucide-react"

export function Certification() {
    const data = [
        {
            title:"Introduction to Packet Tracer",
            issued:"CISCO",
            link:"https://www.youracclaim.com/badges/1b111ba6-00b6-4829-93bf-23453912db8d?source=linked_in_profile",
            date:"2020",
            img:"https://images.credly.com/size/680x680/images/09b6d58c-763a-4b40-aea1-787d8f46bbcd/Intro2PT.png",
        }
    ]


    return(
        <Card>
            <CardHeader>
                <CardTitle>Certification</CardTitle>
                <Separator className="bg-gray-500" />
            </CardHeader>
            <CardContent>
                {data && data.map((value,index)=>{
                    return(
                        <div key={index} id={`${index}`} className="w-[100%] bg-zinc-100 rounded-sm py-1 flex items-center justify-between space-x-4 px-1 md:px-2 xl:px-4">
                            <div className="flex gap-5">
                                <div className="p-2 bg-white rounded-sm h-fit">
                                <img src={value.img} alt="logo" className="h-10 w-10" />
                                </div>
                                <div className="flex flex-col my-auto">
                                <strong>{value.title}</strong>
                                <div>Issued by {value.issued}</div>
                                <div>{value.date}</div>
                                </div>
                            </div>
                            { value.link && <Button className="bg-white text-black px" onClick={()=>window.open(value.link,"_blank")}>
                                <BadgeCheck />
                            </Button>
                            }
                        </div>
                    )
                })
                }
            </CardContent>
        </Card>
    )
}