import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/pages/dashboard/sidebar";

import { Main } from "./main";


export default function Dashboard({ children }: { children: React.ReactNode }) {

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <Main>{children}</Main>
    </SidebarProvider>
  )
}