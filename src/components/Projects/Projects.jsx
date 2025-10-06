import { CalendarDays, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";


const Projects = () => {
    return (
        <div className="w-full mb-5 p-5">
            <div className="flex justify-between my-2 ">
                <div>
                    <h1 className="text-2xl font-semibold">Project managment</h1>
                    <p>Manage and oversee all company projects</p>
                </div>
                <div>
                    <Button className={"mr-2"}>Export</Button>
                    <Button>Create Project</Button>
                </div>
            </div>

            {/* tab content */}
            <Tabs defaultValue="projects" className={"my-4"}>
                <TabsList className={"w-full"}>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>
            </Tabs>

            <div className="border-[1px] p-2 rounded-2xl  my-8">
                <Tabs className={"p-2 flex lg:flex-row flex-col w-full"}>
                    <Input type="text" placeholder="Search Projects" />
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="All Companies" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="techsolution">tech Solution</SelectItem>
                                <SelectItem value="creative agency">creative agency</SelectItem>
                                <SelectItem value="tetailtech">Retail tech</SelectItem>
                                <SelectItem value="techcorp">Tech Corp</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="onhold">Onhold</SelectItem>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                                <SelectItem value="planning">Planing</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="All Priorites" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="high">high</SelectItem>
                                <SelectItem value="medium">medium</SelectItem>
                                <SelectItem value="low">low</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="All Managers" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="alice">Alice</SelectItem>
                                <SelectItem value="bob">Bob</SelectItem>
                                <SelectItem value="carol">Carol</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="All Team" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="design">Design</SelectItem>
                                <SelectItem value="QA">QA</SelectItem>
                                <SelectItem value="Develpomenrt">Development</SelectItem>
                                <SelectItem value="Security">Security</SelectItem>
                                <SelectItem value="fullstack">Full stack</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Button>Grid</Button>
                    <Button>Table</Button>
                </Tabs>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                <Card className="lg:w-full">
                    <CardHeader>
                        <CardTitle>Webstie Redsign</CardTitle>
                        <CardDescription>Tech Solutions inc.</CardDescription>
                        <CardAction>...</CardAction>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-between">
                            <Badge className={"bg-green-200 text-green-800 my-2"}>
                                Active
                            </Badge>
                            <Badge className={"bg-red-200 text-red-800 my-2"}>High</Badge>
                        </div>
                        <div className="flex justify-between my-2">
                            <p>Progress</p>
                            <p className="text-orange-400">70%</p>
                        </div>
                        <div className="mb-3">
                            <Progress value={33} className={'h-4'}/>
                        </div>

                        <div className="flex justify-between m-1 w-[300px]">
                            <div className="">
                                <p>Budget</p>
                                <p>$ 45,000</p>
                            </div>
                            <div>
                                <p>Spent</p>
                                <p>$ 31,000</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between my-3">
                                <div className="flex">
                                    <Users /> <span>3 members</span>
                                </div>
                                <div className="flex">
                                    <CalendarDays /> <span>1/10/25</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-2"></CardFooter>
                </Card>


                <Card className="lg:w-full">
                    <CardHeader>
                        <CardTitle>Webstie Redsign</CardTitle>
                        <CardDescription>Tech Solutions inc.</CardDescription>
                        <CardAction>...</CardAction>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-between">
                            <Badge className={"bg-green-200 text-green-800 my-2"}>
                                Active
                            </Badge>
                            <Badge className={"bg-red-200 text-red-800 my-2"}>High</Badge>
                        </div>
                        <div className="flex justify-between my-2">
                            <p>Progress</p>
                            <p className="text-orange-400">70%</p>
                        </div>
                        <div className="mb-3">
                            <Progress value={43} className={'h-4'}/>
                        </div>

                        <div className="flex justify-between m-1 w-[300px]">
                            <div className="">
                                <p>Budget</p>
                                <p>$ 45,000</p>
                            </div>
                            <div>
                                <p>Spent</p>
                                <p>$ 31,000</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between my-3">
                                <div className="flex">
                                    <Users /> <span>3 members</span>
                                </div>
                                <div className="flex">
                                    <CalendarDays /> <span>1/10/25</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-2"></CardFooter>
                </Card>



                <Card className="lg:w-full">
                    <CardHeader>
                        <CardTitle>Webstie Redsign</CardTitle>
                        <CardDescription>Tech Solutions inc.</CardDescription>
                        <CardAction>...</CardAction>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-between">
                            <Badge className={"bg-green-200 text-green-800 my-2"}>
                                Active
                            </Badge>
                            <Badge className={"bg-red-200 text-red-800 my-2"}>High</Badge>
                        </div>
                        <div className="flex justify-between my-2">
                            <p>Progress</p>
                            <p className="text-orange-400">70%</p>
                        </div>
                        <div className="mb-3">
                            <Progress value={73} className={'h-4'} />
                        </div>

                        <div className="flex justify-between m-1 w-[300px]">
                            <div className="">
                                <p>Budget</p>
                                <p>$ 45,000</p>
                            </div>
                            <div>
                                <p>Spent</p>
                                <p>$ 31,000</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between my-3">
                                <div className="flex">
                                    <Users /> <span>3 members</span>
                                </div>
                                <div className="flex">
                                    <CalendarDays /> <span>1/10/25</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-2"></CardFooter>
                </Card>

                <Card className="lg:w-full">
                    <CardHeader>
                        <CardTitle>Webstie Redsign</CardTitle>
                        <CardDescription>Tech Solutions inc.</CardDescription>
                        <CardAction>...</CardAction>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-between">
                            <Badge className={"bg-green-200 text-green-800 my-2"}>
                                Active
                            </Badge>
                            <Badge className={"bg-red-200 text-red-800 my-2"}>High</Badge>
                        </div>
                        <div className="flex justify-between my-2">
                            <p>Progress</p>
                            <p className="text-orange-400">70%</p>
                        </div>
                        <div className="mb-3">
                            <Progress value={23} className={'h-4'} />
                        </div>

                        <div className="flex justify-between m-1 w-[300px]">
                            <div className="">
                                <p>Budget</p>
                                <p>$ 45,000</p>
                            </div>
                            <div>
                                <p>Spent</p>
                                <p>$ 31,000</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between my-3">
                                <div className="flex">
                                    <Users /> <span>3 members</span>
                                </div>
                                <div className="flex">
                                    <CalendarDays /> <span>1/10/25</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-2"></CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Projects;