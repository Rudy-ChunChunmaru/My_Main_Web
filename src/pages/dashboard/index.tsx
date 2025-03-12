import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/pages/dashboard/sidebar";
import "./index.css";


export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="pageindex flex flex-col h-full w-full" >
        <div className="flex w-full bg-gray-500 px-5 py-1 gap-3 opacity-40" >
          <div className="border-2 rounded-lg border-white">
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