import React from 'react';
import { Button } from '../ui/button';
import { Download, Plus, Search } from 'lucide-react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Input } from '../ui/input';
import CommunicationCard from './CommunicationCard';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';

const Communication = () => {
    return (
        <div className="p-7">
            <section className="md:flex justify-between my-5">
                <section>
                    <h1 className='md:text-2xl text-lg font-bold'>Communication Center</h1>
                    <p>Manage email templates, campaigns, and notification settings</p>
                </section>
                <section className="space-x-2 space-y-2">
                    <Button><Download />Export</Button>
                    <Button><Plus />Add New Client</Button>
                </section>

            </section>


            <section >
                <Tabs defaultValue="templates" >
                    <TabsList className={'w-full'}>
                        <TabsTrigger value="templates">Templates</TabsTrigger>
                        <TabsTrigger value="campaigns">campaigns</TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                    </TabsList>
                </Tabs>

            </section>

            <section className="lg:flex items-center space-x-3 border-[1px] border-gray-200 rounded-2xl p-4  md:w-full lg:w-full my-10 ">
                <div className={'lg:w-1/5   flex relative'}>
                    <span className='absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400'> <Search className="h-5 w-5" /></span>
                    <Input className={"pl-10"} type="text" placeholder="Search templates" />
                </div>

                <div className="mt-2 lg:mt-0 ">
                    <Select>
                        <SelectTrigger className="lg:w-[180px] w-full">
                            <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="all">All Categories</SelectItem>
                                <SelectItem value="active">Onboarding</SelectItem>
                                <SelectItem value="inactive">Performance</SelectItem>
                                <SelectItem value="suspended">Projects</SelectItem>
                                <SelectItem value="suspended">Security</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="mt-2 lg:mt-0">
                    <Select>
                        <SelectTrigger className="lg:w-[180px] w-full">
                            <SelectValue placeholder="All Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="all">All Satus</SelectItem>
                                <SelectItem value="usa">Active</SelectItem>
                                <SelectItem value="uk">Draft</SelectItem>
                                <SelectItem value="germany">Archived</SelectItem>

                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </section>

            {/* card */}
            <CommunicationCard></CommunicationCard>
        </div>
    );
};

export default Communication;