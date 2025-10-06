import { Bell, CircleUser, LogOut } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";
import { Badge } from "../ui/badge";

const Navbar = () => {
    return (
        <div className="flex justify-between w-full h-16 items-center  border-b-gray-100 border-b-2 px-2">
            <div className="flex">
                <SidebarTrigger />
                <h1 className="text-lg font-semibold">ProductivityPro</h1>
            </div>
            <div className="flex justify-between items-center space-x-3">
                <Bell />
                <div className="flex flex-col items-center space-x-2">
                    <p className="text-sm font-semibold">admin@demo.com</p>
                    <Badge className="bg-blue-200 text-blue-700">Admin</Badge>
                </div>
                <CircleUser/>
                <LogOut />
            </div>


        </div>
    );
};

export default Navbar;