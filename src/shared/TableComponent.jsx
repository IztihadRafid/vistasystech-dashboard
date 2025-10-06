import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const TableComponent = ({ headers = [], data = [] }) => {
  // Step 1: Normalize data keys (case-insensitive)
  const normalizedData = data.map((item) => {
    const newObj = {}
    for (const key in item) {
      const normalizedKey = key.toLowerCase().replace(/\s+/g, "")
      newObj[normalizedKey] = item[key]
    }
    return newObj
  })

  // Step 2: Create header → key mapping
  const keyMap = {}
  if (headers.length && data.length) {
    const sampleKeys = Object.keys(normalizedData[0])
    headers.forEach((header) => {
      const normalizedHeader = header.toLowerCase().replace(/\s+/g, "")
      // Try to find the most similar key
      const match = sampleKeys.find((key) =>
        key.includes(normalizedHeader) || normalizedHeader.includes(key)
      )
      keyMap[header] = match || normalizedHeader
    })
  }

  // Step 3: Render
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            {headers.map((header) => (
              <TableHead key={header} className="font-semibold text-gray-700">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {normalizedData.length > 0 ? (
            normalizedData.map((row, rowIndex) => (
              <TableRow key={rowIndex} className="hover:bg-gray-50">
                {headers.map((header, colIndex) => {
                  const key = keyMap[header]
                  const value = row[key] ?? "—"
                  return (
                    <TableCell key={colIndex} className="text-gray-800">
                      {value}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={headers.length || 1}
                className="text-center text-gray-500 py-4"
              >
                No data found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default TableComponent
