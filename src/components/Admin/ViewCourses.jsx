import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

function ViewCourses({ courses }) {
  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "description", label: "Description", minWidth: 100 },
    { id: "platform", label: "Platform", minWidth: 70 },
    { id: "author", label: "Author", minWidth: 80 },
    { id: "price", label: "Price", minWidth: 10 },
    { id: "link", label: "Link", minWidth: 100 },
    { id: "image", label: "Image", minWidth: 30 },
    { id: "uploaded", label: "Uploaded", minWidth: 100 },
    { id: "duration", label: "Duration", minWidth: 100 },
    { id: "keywords", label: "Keywords", minWidth: 100 },
    { id: "wishlisted", label: "Wishlisted", minWidth: 10 },
  ];

  const rows = [
    {
      $collectionId: "67150b750016dff76b2e",
      $createdAt: "2024-11-05T15:40:03.185+00:00",
      $databaseId: "67150b58000821ac8c8f",
      $id: "672a3c5200007a1bd38e",
      $permissions: (3)[
        ('read("user:671ded9a003cee3f8cee")',
        'update("user:671ded9a003cee3f8cee")',
        'delete("user:671ded9a003cee3f8cee")')
      ],
      $updatedAt: "2024-11-07T15:25:44.548+00:00",
      author: "David J. Malan",
      category: "programming",
      description:
        "A gentle introduction to programming that prepares you for subsequent courses in coding.",
      duration: "3 weeks, 2 - 6 hours per week",
      image: "672a3c4c003672ee6931",
      keywords: "programming",
      link: "https://www.edx.org/learn/scratch-programming/harvard-university-cs50-s-introduction-to-programming-with-scratch",
      name: "CS50's Introduction to Programming with Scratch",
      platform: "edX",
      price: 0,
      uploaded: "May 1, 2021",
      wishlisted: false,
    },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="ml-14 mt-14 mb-20">
      <div>
        <Paper sx={{ width: "102%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 500 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {courses
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value.toString()}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={courses.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
}

export default ViewCourses;
