import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Type pour l'état de l'employé
interface EmployeeState {
  employees: Array<{
    id: number;
    firstName: string;
    lastName: string;
    [key: string]: any;
  }>;
}

// Valeur initiale de l'état
const initialState: EmployeeState = {
  employees: [],
};

// Création du slice
const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    // Action pour ajouter un employé
    addEmployee: (
      state,
      action: PayloadAction<{
        id: number;
        firstName: string;
        lastName: string;
        [key: string]: any;
      }>
    ) => {
      state.employees.push(action.payload);
    },
    // Action pour supprimer un employé
    removeEmployee: (state, action: PayloadAction<number>) => {
      state.employees = state.employees.filter(
        (emp) => emp.id !== action.payload
      );
    },
    // Action pour mettre à jour un employé
    updateEmployee: (
      state,
      action: PayloadAction<{ id: number; [key: string]: any }>
    ) => {
      const index = state.employees.findIndex(
        (emp) => emp.id === action.payload.id
      );
      if (index !== -1) {
        state.employees[index] = {
          ...state.employees[index],
          ...action.payload,
        };
      }
    },
  },
});

// Sélecteur pour récupérer tous les employés
export const selectAllEmployees = (state: RootState) =>
  state.employee.employees;

// Export des actions
export const { addEmployee, removeEmployee, updateEmployee } =
  employeeSlice.actions;

// Export du reducer pour le store
export default employeeSlice.reducer;
