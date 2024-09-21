import { Employee } from "../models/employee";

export interface EmployeeRepository {
  save(employee: Employee): void;
  getAll(): Employee[];
}
