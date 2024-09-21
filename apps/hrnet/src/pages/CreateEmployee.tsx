import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmployee } from "../state/employeeSlice";
import { useDatePicker } from "../hooks/useDatePicker";
import { useSelectMenu } from "../hooks/useSelectMenu";
import { useModal } from "../hooks/ModalHook";
import {
  departmentOptions,
  countryOptions,
} from "../modules/employee/business/models/dropdownOptions";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  DatePickerWrapper,
  Title,
  Subtitle,
  ViewButton,
} from "./StyleCreateEmployee";

const CreateEmployee: React.FC = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    department: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const dispatch = useDispatch();
  const { openModal, closeModal, modalComponent } = useModal();
  const navigate = useNavigate();

  // DatePicker pour la date de naissance avec limite
  const {
    datePickerComponent: birthDatePicker,
    selectedDate: selectedBirthDate,
  } = useDatePicker({
    maxDate: new Date(),
    id: "dateOfBirth",
  });

  // DatePicker pour la date de début sans limite de date
  const {
    datePickerComponent: startDatePicker,
    selectedDate: selectedStartDate,
  } = useDatePicker({
    maxDate: null,
    id: "startDate",
  });

  const {
    selectMenuComponent: departmentMenu,
    selectedValue: selectedDepartment,
  } = useSelectMenu({
    options: departmentOptions,
    id: "department",
  });

  const { selectMenuComponent: countryMenu, selectedValue: selectedCountry } =
    useSelectMenu({
      options: countryOptions,
      id: "state",
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveEmployee = () => {
    const newEmployee = {
      id: Date.now(), // Génération d'un id unique basé sur l'heure actuelle
      ...employee,
      dateOfBirth: selectedBirthDate ? selectedBirthDate.toISOString() : "",
      startDate: selectedStartDate ? selectedStartDate.toISOString() : "",
      department: selectedDepartment,
      state: selectedCountry,
    };

    dispatch(addEmployee(newEmployee)); // Dispatch de l'employé avec l'id
    openModal("Employee created successfully", handleCloseModal);
  };

  const handleCloseModal = () => {
    navigate("/employee-list");
  };

  return (
    <Container>
      <Title>HRNET</Title>
      <ViewButton href="/employee-list">View Current Employees</ViewButton>
      <Subtitle>Create Employee</Subtitle>
      <Form>
        <FormGroup>
          <Label htmlFor="firstName">First Name:</Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="lastName">Last Name:</Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="dateOfBirth">Date of Birth:</Label>
          <DatePickerWrapper>{birthDatePicker}</DatePickerWrapper>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="startDate">Start Date:</Label>
          <DatePickerWrapper>{startDatePicker}</DatePickerWrapper>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="street">Street:</Label>
          <Input
            type="text"
            id="street"
            name="street"
            value={employee.street}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="city">City:</Label>
          <Input
            type="text"
            id="city"
            name="city"
            value={employee.city}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="zipCode">Zip Code:</Label>
          <Input
            type="text"
            id="zipCode"
            name="zipCode"
            value={employee.zipCode}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="state">State:</Label>
          {countryMenu}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="department">Department:</Label>
          {departmentMenu}
        </FormGroup>

        <Button
          type="button"
          onClick={saveEmployee}
          aria-label="Save the employee information"
        >
          Save Employee
        </Button>
      </Form>
      {modalComponent}
    </Container>
  );
};

export default CreateEmployee;
