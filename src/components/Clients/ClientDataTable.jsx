import { Eye, SquarePen, Trash } from "lucide-react";
import { Badge } from "../ui/badge";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../ui/table";

const clientData = [
    {
        clientName: "John Doe",
        companyName: "Acme Corp",
        clientEmail: "john@acme.com",
        clientPhone: "+1 555-1234",
        clientCountry: "USA",
        clientProjects: "2",
        clientStaus: "Active",
        clientAction: ""
    },
    {
        clientName: "Jane smith",
        companyName: "-",
        clientEmail: "jane@gmail.com",
        clientPhone: "+44 20 1234 5678",
        clientCountry: "Uk",
        clientProjects: "1",
        clientStaus: "Suspended",
        clientAction: ""
    },
    {
        clientName: "Globex Ltd.",
        companyName: "Globex Ltd.",
        clientEmail: "info@globex.com",
        clientPhone: "+49 30 123456",
        clientCountry: "Germany",
        clientProjects: "3",
        clientStaus: "Inactive",

    },

]
const ClientDataTable = () => {
    return (
        <div className="">
            <h1 className="text-xl font-semibold">All Client</h1>
            <Table>

                <TableHeader>
                    <TableRow>
                        <TableHead>Client Name</TableHead>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Country</TableHead>
                        <TableHead>Projects</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {clientData.map((data) => (
                        <TableRow key={data.clientPhone}>
                            <TableCell className="font-medium p-4 text-blue-600">{data.clientName}</TableCell>
                            <TableCell className={"p-4"}>{data.companyName}</TableCell>
                            <TableCell className={"p-4"}>{data.clientEmail}</TableCell>
                            <TableCell className={"p-4"}>{data.clientPhone}</TableCell>
                            <TableCell className={"p-4"}>{data.clientCountry}</TableCell>
                            <TableCell className={"p-4"}>{data.clientProjects}</TableCell>
                            <TableCell className={"p-4"}>
                                <Badge className=
                                    {
                                        data.clientStaus === 'Active' ? "bg-green-100 text-green-600" : data.clientStaus === "Suspended" ? "bg-yellow-100 text-yellow-600" : "bg-purple-100 text-purple-600"
                                    }

                                >{data.clientStaus}</Badge>
                            </TableCell>
                            <TableCell className={"p-4 flex justify-between items-center"}>{data.clientAction}
                                <span className="scale-75"><Eye /></span>
                                <span className="scale-75"> <SquarePen /></span>
                                <span className="scale-75"> <Trash /></span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </div>
    );
};

export default ClientDataTable;