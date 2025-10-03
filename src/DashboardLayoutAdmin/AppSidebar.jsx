import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Calendar, ChartColumn, Clock, FileText, Home, Inbox, MessageCircleQuestionMark, MessageSquare, Projector, Search, Settings, TriangleAlert, User, Users } from "lucide-react";
import icon from "../assets/vistaIcon.png"
import { NavLink } from "react-router";
// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "/",
        icon: ChartColumn,
    },
    {
        title: "HRIS",
        url: "/hris",
        icon: Users,
    },
    {
        title: "AMS",
        url: "/ams",
        icon: Clock,
    },
    {
        title: "Monitoring",
        url: "/monitoring",
        icon: TriangleAlert,
    },
    {
        title: "Projects",
        url: "/projects",
        icon: Projector,
    },
    {
        title: "Clients",
        url: "/clients",
        icon: Users,
    },
    {
        title: "Communication",
        url: "/communication",
        icon: MessageSquare,
    },
    {
        title: "Help Desk",
        url: "/helpdesk",
        icon: MessageCircleQuestionMark,
    },
    {
        title: "Reports",
        url: "/reports",
        icon: FileText,
    },
    {
        title: "Admin Logs",
        url: "/adminlogs",
        icon: FileText,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
    },
]
const AppSidebar = () => {
    return (
        <Sidebar>
            <SidebarContent className={'p-2'}>
                <SidebarGroup>
                    <img className=" w-52 my-5" src={icon} alt="com logo" />
                    <hr />
                    <SidebarGroupContent>
                        <SidebarMenu className={'mt-3'}>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <NavLink to={item.url}  >
                                            <item.icon />
                                            <span className={'ml-2'}>{item.title}</span>
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
};

export default AppSidebar;