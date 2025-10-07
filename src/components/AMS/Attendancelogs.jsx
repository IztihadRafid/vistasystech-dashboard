import TableComponent from "@/shared/TableComponent";
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Badge } from "../ui/badge";
import { Eye, SquarePen } from "lucide-react";

// Fetching payroll data from json file
const fetchAttendancelogs = async () => {
  const response = await fetch("/attendanceLogs.json")
  if (!response.ok) {
    throw new Error("Error occured while fetching")
  }
  return response.json()
}



const Attendancelogs = () => {
  const headers = [
    { key: "Employee", label: "Employee" },
    { key: "Department", label: "Department" },
    { key: "Date", label: "Date" },
    { key: "CheckIn", label: "Check In" },
    { key: "CheckOut", label: "Check Out" },
    { key: "Status", label: "Status" },
    { key: "Source", label: "Source" },
    { key: "Hours", label: "Hours" },
    { key: "Actions", label: "Actions" },
  ];

  // fetch by tanstack
  const { error, data, isLoading,isPending } = useQuery({
    queryKey: ["attendancelogs"],
    queryFn: fetchAttendancelogs
  })
  

  // buttons 
  const handleView = (row) => {
    console.log("View clicked", row);
  };

  const handleEdit = (row) => {
    console.log("Edit clicked", row);
  };

  // badge componensts for status
  const StatusBadge = ({ Status }) => {
    const statusLowercase = Status?.toLowerCase();

    if (statusLowercase === "absent") {
      return <Badge className={"bg-red-100 text-red-700 hover:bg-gray-300"}>Absent</Badge>;
    } else if (statusLowercase === "present") {
      return <Badge className={"bg-green-100 text-green-700 hover:bg-gray-300"}>Present</Badge>;
    }
  };
 
  const customRenderers = {
    Status: (row) => <StatusBadge Status={row.Status} />,
    Actions: (row) => (
      <div className="flex gap-2">
        <button onClick={() => handleView(row)}>
          <Eye className="scale-75" />
        </button>
        <button onClick={() => handleEdit(row)}>
          <SquarePen className="scale-75" />
        </button>
      </div>
    ),
  };





  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <TableComponent
        headers={headers}
        data={data}
        customRenderers={customRenderers}
      />
    </div>
  )
};

export default Attendancelogs;