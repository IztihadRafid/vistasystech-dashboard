import { Eye, SquarePen, Trash, User } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";


const CommunicationCard = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 ">
            <Card className="w-full ">
                <CardHeader>
                    <span className="flex items-center"><User className="text-gray-400 mr-3"></User><CardTitle>Welcome Email</CardTitle></span>
                    <CardDescription>
                        Welcome to our Employee Monitoring System
                    </CardDescription>

                </CardHeader>
                <CardContent className={'w-full'}>
                    <div className="flex justify-between items-center w-2/3">
                        <Badge className={'bg-green-200 text-green-600 hover:bg-gray-400 hover:text-green-300'}>active</Badge>
                        <Badge className={'bg-white text-black hover:bg-gray-400 '} variant={'outline'}>email</Badge>
                        <Badge className={'bg-gray-100 text-black'}>onboarding</Badge>
                    </div>

                    <p className="text-sm my-3 text-gray-500">Last used: Jan 15, 2024</p>
                    <div className="flex justify-between items-center w-1/3 p-2">
                        <span className="scale-75"><Eye /></span>
                        <span className="scale-75"> <SquarePen /></span>
                        <span className="scale-75"> <Trash /></span>
                    </div>
                </CardContent>

            </Card>


             <Card className="w-full ">
                <CardHeader>
                    <span className="flex items-center"><User className="text-gray-400 mr-3"></User><CardTitle>Welcome Email</CardTitle></span>
                    <CardDescription>
                        Welcome to our Employee Monitoring System
                    </CardDescription>

                </CardHeader>
                <CardContent className={'w-full'}>
                    <div className="flex justify-between items-center w-2/3">
                        <Badge className={'bg-green-200 text-green-600 hover:bg-gray-400 hover:text-green-300'}>active</Badge>
                        <Badge className={'bg-white text-black hover:bg-gray-400 '} variant={'outline'}>email</Badge>
                        <Badge className={'bg-gray-100 text-black'}>onboarding</Badge>
                    </div>

                    <p className="text-sm my-3 text-gray-500">Last used: Jan 15, 2024</p>
                    <div className="flex justify-between items-center w-1/3 p-2">
                        <span className="scale-75"><Eye /></span>
                        <span className="scale-75"> <SquarePen /></span>
                        <span className="scale-75"> <Trash /></span>
                    </div>
                </CardContent>

            </Card>



             <Card className="w-full ">
                <CardHeader>
                   <span className="flex items-center"><User className="text-gray-400 mr-3"></User><CardTitle>Welcome Email</CardTitle></span>
                    <CardDescription>
                        Welcome to our Employee Monitoring System
                    </CardDescription>

                </CardHeader>
                <CardContent className={'w-full'}>
                    <div className="flex justify-between items-center w-2/3">
                        <Badge className={'bg-green-200 text-green-600 hover:bg-gray-400 hover:text-green-300'}>active</Badge>
                        <Badge className={'bg-white text-black hover:bg-gray-400 '} variant={'outline'}>email</Badge>
                        <Badge className={'bg-gray-100 text-black'}>onboarding</Badge>
                    </div>

                    <p className="text-sm my-3 text-gray-500">Last used: Jan 15, 2024</p>
                    <div className="flex justify-between items-center w-1/3 p-2">
                        <span className="scale-75"><Eye /></span>
                        <span className="scale-75"> <SquarePen /></span>
                        <span className="scale-75"> <Trash /></span>
                    </div>
                </CardContent>

            </Card>

             <Card className="w-full">
                <CardHeader>
                   <span className="flex items-center"><User className="text-gray-400 mr-3"></User><CardTitle>Welcome Email</CardTitle></span>
                    <CardDescription>
                        Welcome to our Employee Monitoring System
                    </CardDescription>

                </CardHeader>
                <CardContent className={'w-full'}>
                    <div className="flex justify-between items-center w-2/3">
                        <Badge className={'bg-green-200 text-green-600 hover:bg-gray-400 hover:text-green-300'}>active</Badge>
                        <Badge className={'bg-white text-black hover:bg-gray-400 '} variant={'outline'}>email</Badge>
                        <Badge className={'bg-gray-100 text-black'}>onboarding</Badge>
                    </div>

                    <p className="text-sm my-3 text-gray-500">Last used: Jan 15, 2024</p>
                    <div className="flex justify-between items-center w-1/3 p-2">
                        <span className="scale-75"><Eye /></span>
                        <span className="scale-75"> <SquarePen /></span>
                        <span className="scale-75"> <Trash /></span>
                    </div>
                </CardContent>

            </Card>
        </div>
    );
};

export default CommunicationCard;