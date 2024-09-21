import React from "react";
import { DataTable } from "data-table-nathalie";
import { useSelector } from "react-redux";
import { selectAllEmployees } from "../state/employeeSlice";
import {
  TableContainer,
  HRTitle,
  StyledTable,
  Button,
  HomeLink,
  Subtitle,
} from "./StyleEmployeeList";

// Fonction pour formater la date en dd/MM/yyyy
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const EmployeeList: React.FC = () => {
  const employees = useSelector(selectAllEmployees); // Récupère les employés depuis redux

  // Ajout du formatage des dates pour les employés avant de les passer au tableau
  const formattedEmployees = employees.map((employee) => ({
    ...employee,
    startDate: formatDate(employee.startDate),
    dateOfBirth: formatDate(employee.dateOfBirth),
  }));

  const columns = [
    { title: "First Name", field: "firstName" },
    { title: "Last Name", field: "lastName" },
    { title: "Start Date", field: "startDate" }, // Colonne Start Date
    { title: "Department", field: "department" },
    { title: "Date of Birth", field: "dateOfBirth" }, // Colonne Date of Birth
    { title: "Street", field: "street" },
    { title: "City", field: "city" },
    { title: "State", field: "state" },
    { title: "Zip Code", field: "zipCode" },
  ];

  return (
    <TableContainer>
      <HRTitle>HRNET</HRTitle>
      <Subtitle>Current Employees</Subtitle>
      <StyledTable>
        <DataTable columns={columns} data={formattedEmployees} />
      </StyledTable>
      <Button>Export to CSV</Button>
      <HomeLink href="/">Home</HomeLink>
    </TableContainer>
  );
};

export default EmployeeList;
