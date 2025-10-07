import React, { useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TableComponent = ({
  headers = [],
  data = [],
  customRenderers = {},
  isLoading = false, // loading state
}) => {
  const [itemsPerPage, setItemsPerPage] = useState(5); // default 5
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Paginate data
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const skeletonRows = Array(itemsPerPage).fill(null);

  // Page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Items per page change
  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1); // Reset to first page
  };

  return (
    <div className="bg-white shadow-lg rounded-xl">
      <div className="p-4">
        <Table className="rounded-xl overflow-hidden bg-white">
          <TableHeader>
            <TableRow>
              {headers.map((header) => (
                <TableHead key={header.key} className="font-semibold text-gray-700">
                  {header.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading
              ? // Loading skeleton
                skeletonRows.map((_, idx) => (
                  <TableRow key={`skeleton-${idx}`}>
                    {headers.map((header) => (
                      <TableCell key={header.key}>
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-full max-w-[80px]" />
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              : // Render data
                paginatedData.map((row, idx) => (
                  <TableRow key={idx}>
                    {headers.map((header) => (
                      <TableCell key={header.key}>
                        {customRenderers[header.key]
                          ? customRenderers[header.key](row)
                          : row[header.key] ?? "-"}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination + Select */}
      {!isLoading && (
        <div className="flex flex-col md:flex-row items-center justify-between md:my-5 p-5 gap-3">
          {/* Pagination */}
          <Pagination className={"flex justify-center md:justify-start"}>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage - 1);
                  }}
                  disabled={currentPage === 1}
                >
                  Previous
                </PaginationPrevious>
              </PaginationItem>

              <PaginationItem>
                <span className="px-4 py-2">
                  {currentPage} of {totalPages}
                </span>
              </PaginationItem>

              <PaginationItem>
                <PaginationNext
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage + 1);
                  }}
                  disabled={currentPage === totalPages}
                >
                  Next
                </PaginationNext>
              </PaginationItem>
            </PaginationContent>
          </Pagination>

          {/* Rows per page select */}
          <div className="flex items-center gap-2">
            <Select onValueChange={handleItemsPerPageChange} value={String(itemsPerPage)}>
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {[5, 10, 15].map((option) => (
                  <SelectItem key={option} value={String(option)}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableComponent;
