import TableComponent from "@/shared/TableComponent";

const Payroll = () => {
   const headers = ["Employee", "Gross salary", "Total Deduction","net Salary","action"]
  const data = [
    { Employee: "Rafid", Grosssalary: "123123", TotalDeduction: "123",netSalary: "123", action:"paid"},
    { employee: "Rafid", Grosssalary: "123123", TotalDeduction: "123",netSalary: "123", action:"paid"}
   
  ]

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <TableComponent headers={headers} data={data} />
    </div>
  )
};

export default Payroll;