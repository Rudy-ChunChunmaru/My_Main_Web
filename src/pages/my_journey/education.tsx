import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import logo_ukm from "@/assets/Logo-UKM.svg";

import { ChevronsUpDown } from "lucide-react"
import { motion } from "framer-motion";
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
            <CardContent className="flex flex-col gap-3">
                {data_education.map((value,index)=>{
                    return(
                        <div key={index} id={value.title} className="bg-zinc-100 rounded-sm py-1 h-full transision-all duration-150">
                        <Collapsible
                            key={index}
                            open={isOpen[index]["open"]}
                            className="w-[100%] space-y-2"
                        >
                        <div className="flex items-center justify-between space-x-4 px-4">
                          <div className="flex gap-2">
                            <div className="p-2 bg-white rounded-sm">
                              <img src={value.logo} alt="logo" className="h-10 w-10" />
                            </div>
                            <div className="flex flex-col my-auto">
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
                          </div>
                          <CollapsibleTrigger asChild>
                            <Button variant="outline" size="sm" onClick={()=>{extendOpen(value,index)}}>
                              <ChevronsUpDown className="h-4 w-4" />
                              <span className="sr-only">Toggle</span>
                            </Button>
                          </CollapsibleTrigger>
                        </div>
                        <CollapsibleContent className="space-y-1">
                          {value.detail.map((valuedetail,times)=>{
                            return(
                              <motion.div
                                initial="hidden"
                                whileInView="visible"
                                exit="hidden"
                                viewport={{ once: true }}
                                key={times}
                                animate={!isOpen[index]["open"] ? "visible" : "hidden"}
                                variants={{
                                  hidden: { opacity: 0.25, y: -25 * times, transition: { duration: 0.3 } },
                                  visible: { opacity: 1, y: 0 ,transition: { duration: 0.3 }},
                                }}
                                className="rounded-md border border-gray-500 px-2 py-1 font-mono text-sm shadow-sm"
                              >
                                {valuedetail.info}
                              </motion.div>
                            )
                          })}
                         
                        </CollapsibleContent>
                        </Collapsible>
                      </div>
                    )
                })}
            </CardContent>
        </Card>
    )
}