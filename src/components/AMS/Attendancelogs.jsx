import TableComponent from "@/shared/TableComponent";

const Attendancelogs = () => {
  const headers = ["Name", "Email", "Role"]
  const data = [
    { Name: "Rafid", Email: "rafid@gmail.com", Role: "Admin" },
    { Name: "John", Email: "john@gmail.com", Role: "User" },
  ]

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <TableComponent headers={headers} data={data} />
    </div>
  )
};

export default Attendancelogs;