import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";
import { Bell, CircleUser } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "@/components/Footer/Footer";
const DashboardAdminLayout = () => {
    return (
        <SidebarProvider className={"bg-gray-50"}>
            <div className="flex min-h-screen w-full">
                <AppSidebar/>{/* Sidebar stays on the left */}

                <div className="flex flex-col flex-1">
                    {/*Navbar */}
                    <header className="sticky top-0 z-50 bg-white">
                        <Navbar />
                    </header>

                    {/* Dynamic content */}
                    <main className="flex-1 overflow-y-auto">
                        <Outlet />
                    </main>

                    {/* Footer */}
                    <footer className="sticky bottom-0 z-50 bg-white ">
                        <Footer />
                    </footer>
                </div>
            </div>
        </SidebarProvider>

    );
};

export default DashboardAdminLayout;