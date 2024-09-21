import { EmployeeRepository } from "../business/interfaces/EmployeeRepository";
import { Employee } from "../business/models/employee";

// Implémentation en mémoire
export class InMemoryEmployeeRepository implements EmployeeRepository {
  private employees: Employee[] = [];

  save(employee: Employee): void {
    this.employees.push(employee);
    console.log("Employee saved:", employee);
  }

  getAll(): Employee[] {
    return this.employees;
  }
}
