import TableComponent from "@/shared/TableComponent";
import { useQuery } from '@tanstack/react-query'
import { Badge } from "../ui/badge";
import { Eye } from "lucide-react";


const StatusBadge = ({ status }) => {
  const statusLowercase = status?.toLowerCase();
  if (statusLowercase === "paid") {
    return <Badge className={"bg-green-100 text-green-700 hover:bg-gray-300"}>
      Paid
    </Badge>
  }
  else if (statusLowercase === "unpaid") {
    return (
      <Badge className={"bg-blue-100 text-blue-700 hover:bg-gray-300"}>
        Unpaid
      </Badge>
    );
  }
  else {
    return <Badge className={"bg-white text-black"}>__</Badge>;
  }
}



// Fetching payroll data from json file
const fetchPayroll = async () => {
  const response = await fetch("/payroll.json")
  if (!response.ok) {
    throw new Error("Error occured while fetching")
  }
  return response.json()
}





const Payroll = () => {
  // headers
  const headers = [
    { key: "Employee", label: "Employee" },
    { key: "Grosssalary", label: "Gross Salary" },
    { key: "TotalDeduction", label: "Total Deduction" },
    { key: "netSalary", label: "Net Salary" },
    { key: "status", label: "Status" },
    { key: "action", label: "Actions" },
  ];

  // tanstack query fetch
  const { data, error, isLoading } = useQuery({
    queryKey: ["payroll"],
    queryFn: fetchPayroll
  })


  // handle view button
  const handleView = (row) => {
    console.log("View Clicked", row)
  }


  // Custom rendering for scpecific column
  const customRenderers = {
    status: (row) => <StatusBadge status={status.row}></StatusBadge>,
    action: (row) => (
      <div className="flex gap-2">
        <button onClick={() => handleView(row)}>
          <Eye className="scale-75" />
        </button>
      </div>
    ),
  }


  //Error from tanstack
  if (error)
    return (
      <p className="p-6 text-red-500">
        Error loading data: {error.message || "Unknown error"}
      </p>
    );
  return (
 <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Payroll</h2>
      <TableComponent
        headers={headers}
        data={data || []}
        customRenderers={customRenderers}
        isLoading={isLoading} // Pass loading state here
      />
    </div>
  )
};

export default Payroll;