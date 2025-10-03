import { Download, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import ClientDataTable from "./ClientDataTable";

const Clients = () => {
    return (
        <div className="p-5">
            <section className="md:flex justify-between   my-5">
                <section>
                    <h1 className="text-2xl font-bold">Clients</h1>
                    <p>Total Clients: 3</p>
                </section>
                <section className="space-x-2 space-y-2">
                    <Button><Download />Export</Button>
                    <Button><Plus />Add New Client</Button>
                </section>
            </section>

            <section className="lg:flex space-x-3 border-[1px] border-gray-200 rounded-2xl p-4 md:w-full lg:w-full  ">
                <div className={'lg:w-1/5  w-full'}>
                    <Input  type="text" placeholder="Search by name, clientEmail, company" />
                </div>

                <div className="mt-2 md:mt-0">
                    <Select>
                    <SelectTrigger className="lg:w-[180px] w-full">
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                            <SelectItem value="suspended">Suspended</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                </div>

                <div className="mt-2 md:mt-0">
                    <Select>
                    <SelectTrigger className="lg:w-[180px] w-full">
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="usa">USA</SelectItem>
                            <SelectItem value="uk">UK</SelectItem>
                            <SelectItem value="germany">Germany</SelectItem>

                        </SelectGroup>
                    </SelectContent>
                </Select>
                </div>


               <div className="mt-2 md:mt-0">
                 <Select>
                    <SelectTrigger className="lg:w-[180px] w-full">
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
               </div>


            </section>

            <section className="border-[1px] rounded-2xl p-3 my-10">
                <ClientDataTable></ClientDataTable>
            </section>
        </div>
    );
};

export default Clients;