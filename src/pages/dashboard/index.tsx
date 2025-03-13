import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/pages/dashboard/sidebar";
import "./index.css";


export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="pageindex relative flex flex-col h-full w-full" >
        <div className="fixed flex w-full bg-[#ffffff1a] px-5 py-1 gap-3 drop-shadow-md" >
          <div className="border-2 rounded-lg border-white bg-[#808080]">
            <SidebarTrigger />
          </div>
        </div>
        <div className="w-full h-full" >
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}