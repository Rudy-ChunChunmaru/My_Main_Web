import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Profile } from "./profile";
import { About } from "./about";
import { Info } from "./info";


interface MyProfileProps{
    cssBorder:string;
}

export default function MyProfile({cssBorder}:MyProfileProps) {
    return(
        <div className={cn(cssBorder,"")}>
            <Card className="bg-[#ffffff05] w-[100%] gap-5 py-10 px-3 text-[#ffffff]">
                <CardContent className="mx-auto flex h-full w-10/12 flex-col gap-1 md:flex-row">
                    <div className="relative top-10 z-0 w-full md:top-0 md:w-6/12">
                        <div className="group relative mx-auto w-48">
                            <Profile />
                        </div>
                    </div>
                    <div className="z-10 flex h-full w-full flex-col gap-2 md:w-5/12">
                        <motion.div
                        className="text-center font-Protest_Revolution text-4xl xl:text-[3.9rem]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        transition={{ duration: 0.7 }}
                        variants={{
                            hidden: { opacity: 0.75, y: 100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        >
                            <strong>RUDY S.T</strong>
                        </motion.div>
                        <motion.div
                            className="text-center font-Protest_Riot text-3xl xl:text-[3.2rem]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            transition={{ delay: 0.05, duration: 0.7 }}
                            variants={{
                                hidden: { opacity: 0.75, y: 100 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <Info />
                        </motion.div>
                    </div>
                </CardContent>
                <CardContent className="w-[100%] h-fit">
                    <About />
                </CardContent>
            </Card>
        </div> 
    )
}