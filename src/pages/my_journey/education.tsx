import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import logo_ukm from "@/assets/Logo-UKM.svg";

import { ChevronsUpDown } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const data_education = [
    {
        id: 1,
        title: "Universitas Kristen Maranatha",
        periode: "Aug 2018 - Jul 2022",
        location: "Bandung, Indonesia",
        info: "Electrical Engineer S1",
        detail: [
          {
            time: 2019,
            doing: "Activity",
            info: "Wiratha Fest as a teaching mentor member",
            link: "",
          },
          {
            time: 2019,
            doing: "Training",
            info: "Using eagle to design PCB board",
            link: "",
          },
          {
            time: 2019,
            doing: "Training",
            info: "IOT using ESP base on Web system",
            link: "",
          },
          {
            time: 2020,
            doing: "Project",
            info: "3D Desain using 360 Fusion and 3D Printing",
            link: "",
          },
          {
            time: 2020,
            doing: "Activity",
            info: "IMA Electrical Engineering member of the RnD management",
            link: "",
          },
          {
            time: 2020,
            doing: "Training",
            info: "Basic M221 Programmable Logic Controller & HMI at Schneider PLC Training",
            link: "",
          },
          {
            time: 2021,
            doing: "Project",
            info: "Implementation of Augmented Reality (AR) on Chiller Machine",
            link: "",
          },
          {
            time: 2021,
            doing: "Project",
            info: "Desain Project District Cooling System",
            link: "https://www.youtube.com/watch?v=dOKohYUNeXQ&ab_channel=TeknikElektro-Maranatha",
          },
          {
            time: 2021,
            doing: "Project",
            info: "pH control system in water containers using microchip control",
            link: "",
          },
          {
            time: 2021,
            doing: "Project",
            info: "Autonomous Robot AI Inventory Based on Item Color",
            link: "https://www.youtube.com/watch?v=De_9H4tOCIM&ab_channel=TeknikElektro-Maranatha",
          },
          {
            time: 2021,
            doing: "Competition",
            info: "Programmable Logic Control Competition at Electro Activities Programmable E-TIME 2021",
            link: "",
          },
          {
            time: 2022,
            doing: "Graduated",
            info: "Graduated from Maranatha Christian University, Bandung with GPA/IPK 3.25",
            link: "",
          },
        ],
        logo: logo_ukm,
    },
]


export function Education() {
    const [isOpen, setIsOpen] = useState([...data_education.map((value)=>{return({"id":value.id,"open":false})})])
    const extendOpen = (row:{
        id: number;
        title: string;
        periode: string;
        location: string;
        info: string;
        detail: {
            time: number;
            doing: string;
            info: string;
            link: string;
        }[];
        logo: string;
        },rowIndex:number)=>{
        console.log(!isOpen[rowIndex]["open"])
        setIsOpen(
            [...isOpen.map(
                (value)=>{
                    if(value["id"]==row["id"]){
                        return({"id":value["id"],"open":!isOpen[rowIndex]["open"]})
                    }else{
                        return value
                    }
                })
            ]
        )
    }
    

    return(
        <Card>
            <CardHeader>
                <CardTitle>Education</CardTitle>
                <Separator className="bg-gray-500" />
            </CardHeader>
            <CardContent>
                {data_education.map((value,index)=>{
                    return(
                        <div key={index} id={value.title} className="bg-zinc-100 rounded-sm py-1">
                        <Collapsible
                            key={index}
                            open={isOpen[index]["open"]}
                            className="w-[100%] space-y-2"
                        >
                        <div className="flex items-center justify-between space-x-4 px-4">
                          <div>
                            <CardTitle>{value.title}</CardTitle>
                            <Separator className="bg-gray-500" />
                            <div className="flex gap-5 h-5 space-x-4 text-sm">
                                <CardDescription>{value.info}</CardDescription>
                                <Separator orientation="vertical" className="bg-gray-500" />
                                <CardDescription>{value.periode}</CardDescription>
                                <Separator orientation="vertical" className="bg-gray-500" />
                                <CardDescription>{value.location}</CardDescription>
                            </div>
                          </div>
                          <CollapsibleTrigger asChild>
                            <Button variant="outline" size="sm" onClick={()=>{extendOpen(value,index)}}>
                              <ChevronsUpDown className="h-4 w-4" />
                              <span className="sr-only">Toggle</span>
                            </Button>
                          </CollapsibleTrigger>
                        </div>
                        <CollapsibleContent className="space-y-2">
                          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                            @radix-ui/colors
                          </div>
                        </CollapsibleContent>
                        </Collapsible>
                      </div>
                    )
                })}
            </CardContent>
        </Card>
    )
}