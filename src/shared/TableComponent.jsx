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

const TableComponent = ({
  headers = [],
  data = [],
  customRenderers = {},
  isLoading = false,  // New prop for loading state
}) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Generate skeleton rows if loading
  const skeletonRows = Array(itemsPerPage).fill(null);

  return (
    <div className="bg-white shadow rounded-xl">
      <div className="p-4 ">
        <Table className="rounded-xl overflow-hidden bg-white ">
          <TableHeader className={""}>
            <TableRow className=" ">
              {headers.map((header) => (
                <TableHead
                  key={header.key}
                  className="font-semibold text-gray-700"
                >
                  {header.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading
              ? // Show skeleton rows while loading
              skeletonRows.map((_, idx) => (
                <TableRow key={`skeleton-${idx}`}>
                  {headers.map((header) => (
                    <TableCell key={header.key}>
                      {/* Skeleton cell */}
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-full max-w-[80px]"></div>
                    </TableCell>
                  ))}
                </TableRow>
              ))
              : // Show real data rows
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

      {/* Pagination */}
      {!isLoading && (
        <div>
          <Pagination className={"flex lg:justify-end justify-center md:my-5 p-5"}>
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
        </div>
      )}
    </div>
  );
};

export default TableComponent;