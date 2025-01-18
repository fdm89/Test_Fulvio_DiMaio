import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    styled,
    tableCellClasses,
    CircularProgress,
    Box,
    TablePagination
  } from "@mui/material";
import { useEffect, useState } from "react";
import employeeService from "../../services/employee-service";
import { Employee } from "../../types";
import ExportButton from "../../components";

export default function EmployeeListPage() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10); 

    useEffect(() => {
        setIsLoading(true);
        const fetchEmployees = async () => {
            try {
                const result = await employeeService.getAllEmployees();
                console.log(result);
                setEmployees(result);
            } catch (error) {
              if (error instanceof Error) {
                    console.error("Error while fetching Data:", error);
                    setError(error.message);
                  }
            } finally {
                setIsLoading(false);
            }
        };
        fetchEmployees();
    }, []);

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
      };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };  

    if (isLoading) {
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh"
            }}
          >
            <CircularProgress />
          </Box>
        );
      }
    
      if (error) {
        return (
          <Typography color="error" sx={{ textAlign: "center", mt: 4 }}>
            {`An error occurred: ${error}`}
          </Typography>
        );
      }

    return (
        <>
        <Typography variant="h4" sx={{ textAlign: "center", mt: 4, mb: 4 }}>
        Employees
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableHeadCell>Code</StyledTableHeadCell>
              <StyledTableHeadCell>Name</StyledTableHeadCell>
              <StyledTableHeadCell>Last Name</StyledTableHeadCell>
              <StyledTableHeadCell>Address</StyledTableHeadCell>
              <StyledTableHeadCell>Email</StyledTableHeadCell>
              <StyledTableHeadCell>Phone</StyledTableHeadCell>
              <StyledTableHeadCell>Department code</StyledTableHeadCell>
              <StyledTableHeadCell>Department Description</StyledTableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.code}</TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.department?.code}</TableCell>
                <TableCell>{row.department?.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={employees.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Box mb={3}>
        <ExportButton employees={employees}/>
      </Box>
    </>
  );
}

const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
}));
