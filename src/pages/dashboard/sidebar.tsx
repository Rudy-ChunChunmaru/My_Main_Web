
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTriggerClose,
  SidebarFooter,
} from "@/components/ui/sidebar"
import {
  Separator,
} from "@/components/ui/separator";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { menu_items,data_suppot } from "@/pages/dashboard/data";



export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader key={"Section Head"} >
        <div className="border-2 rounded-lg border-gray-500 ">
          <SidebarTriggerClose className="w-full hover:bg-gray-300"/>
        </div> 
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup key={"Section Menu"}>
          <SidebarGroupLabel className="text-base text-back flex-col flex">
            <strong>Section Menu</strong>
            <Separator className="bg-gray-500" />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menu_items.map((item,index) => (
                <AnchorLink href={item.url} key={index}>
                  <SidebarMenuItem key={item.title}>
                        <motion.div
                          key={item.title}
                          initial="hidden"
                          whileInView="visible"
                          transition={{ duration: 0.5 + (index * 0.1) }}
                          variants={{
                            hidden: { opacity: 1, x: (-150 - (index * 15)) },
                            visible: { opacity: 1, x: 0 },
                          }}
                        >
                          <SidebarMenuButton variant={"costum"} className="flex items-center gap-2" key={index}>
                            <item.icon />
                            <span>{item.title}</span>   
                          </SidebarMenuButton>
                        </motion.div>
                  </SidebarMenuItem>
                  </AnchorLink>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="relative flex flex-col justify-between gap-2 w-full">
          <div className="flex flex-wrap gap-1 w-full bg-gray-300 px-2 py-1 rounded-sm">
            {data_suppot.map((value,index)=>{
              return(
                <motion.div
                  className="w-[22%]"
                  key={value.title}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.3 }}
                  variants={{
                    hidden: { opacity: 0.20, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Button 
                    key={index}
                    className="bg-white border-black border-2 rounded-gray-500 hover:bg-gray-300 hover:border-gray-500 w-full"
                    onClick={(e)=>{
                      e.preventDefault();
                      window.open(value.link, "_blank");
                    }}
                  >
                    {value.logo}
                  </Button>
                </motion.div>
              )
            })}

          </div>
          <div className="flex justify-between border-b-2 border-gray-500 w-full">
              <div className="content-start text-xs">
                A.K.A ChunChunMaru
              </div>
              <Separator orientation="vertical" className="bg-gray-500" />
              <div className="content-end text-xs">
                rudymuinfo@gmail.com
              </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
