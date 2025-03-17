import { SidebarTrigger,useSidebar } from "@/components/ui/sidebar";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import "./index.css";
import { cn } from "@/lib/utils";

interface MainProps {
    children: React.ReactNode;
}

export function Main({children}:MainProps){
    const controls = useAnimationControls()
    const {open} = useSidebar()

    const wrapperVariants = {
        hidden: {
          opacity: 1,
          y: '-10vw',
          transition: { duration: 0.3 },
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {  duration: 0.3 },
        }
    };

    useEffect(()=>{
        if(!open) controls.start('visible');
        else controls.start('hidden');
        
    },[open])

    return(
        <main className="pageindex relative flex flex-col h-full w-full" >
            <motion.div
                variants={wrapperVariants}
                initial="visible"
                animate={controls}
                exit="hidden"
                className="fixed flex w-full bg-[#ffffff4a] px-2 py-1 gap-3 drop-shadow-xl"
            >
                <div className="border-2 rounded-lg border-black bg-gray-500">
                    <SidebarTrigger />
                </div>
            </motion.div>
            <div className={cn("w-full h-full transition-all duration-250",open?"":"pt-5")} >
                {children}
            </div>
      </main>
    )
}