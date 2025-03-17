import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import logo_pfg from "@/assets/Logo-PFG.svg";
import logo_ykkap from "@/assets/Logo-YKKAP.svg";

import { ChevronsUpDown } from "lucide-react"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const data_experince = [
    {   
        id:1,
        title: "PT PERDANA FRESTA GARMENT",
        periode: "Feb 2023 - Sep 2024",
        location: "Padalalarang - Indonesia",
        info: "IT Programer",
        detail: [
          {
            time: 2023,
            doing: "Training",
            info: "Store data using Mysql, Backend using framework codeigniter and frontend using jqueryUI",
            link: "",
          },
          {
            time: 2023,
            doing: "Project",
            info: "making web app to store data export and import garment and textile",
            link: "",
          },
          {
            time: 2023,
            doing: "Training",
            info: "Git Repo",
            link: "",
          },
          {
            time: 2023,
            doing: "Training",
            info: "Backend django, framework django and python",
            link: "",
          },
          {
            time: 2024,
            doing: "Project",
            info: "making web app report sell and using textile to make garment",
            link: "",
          },
          {
            time: 2024,
            doing: "Training",
            info: "TypeScript for front React and nestjs",
            link: "",
          },
          {
            time: 2024,
            doing: "Project",
            info: "This Website: Make my own web site about my profile using React TypeScript",
            link: "",
          },
          {
            time: 2024,
            doing: "Training",
            info: "Web Front end using redux react",
            link: "",
          },
          {
            time: 2024,
            doing: "Training",
            info: "Learn docker works, build image docker and deploy the image into docker ",
            link: "",
          },
          {
            time: 2024,
            doing: "Project",
            info: "Making web app For my own using django for backend and forntend using react app",
            link: "",
          },
          {
            time: 2024,
            doing: "Training",
            info: "Learn basic about MQTT IOT",
            link: "",
          },
          {
            time: 2024,
            doing: "Project",
            info: "Deployment server local to public internet using tunnel cloundflare",
            link: "",
          },
        ],
        logo: logo_pfg,
      },
      {
        id:2,
        title: "PT YKK AP INDONESIA",
        periode: "Sep 2024 - Now",
        location: "Tangerang - Indonesia",
        info: "Spesialis IT System and Data Analyst",
        detail: [
          {
            time: 2024,
            doing: "Project",
            info: "Analyst data database build of material item and data injection data",
            link: "",
          },
        ],
        logo: logo_ykkap,
      },
]

export function Experiences() {
    const [isOpen, setIsOpen] = useState([...data_experince.map((value)=>{return({"id":value.id,"open":false})})])
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
                <CardTitle>Experience</CardTitle>
                <Separator className="bg-gray-500" />
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
                {data_experince.map((value,index)=>{
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