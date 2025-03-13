import {  Home, UserRound, Newspaper, Waves } from "lucide-react";

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
} from "@/components/ui/sidebar"

import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#home",
    icon: Home,
  },
  {
    title: "Profil",
    url: "#",
    icon: UserRound,
  },
  {
    title: "Portofolio",
    url: "#",
    icon: Newspaper,
  },
  {
    title: "Media",
    url: "#",
    icon: Waves,
  },
]

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
          <SidebarGroupLabel className="text-base py-1 text-back">
            <strong>Section Menu</strong>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item,index) => (
                <AnchorLink href={item.url}>
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
                            <SidebarMenuButton variant={"costum"} className="flex items-center gap-2">
                              
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
    </Sidebar>
  )
}
