import { Employee } from "../types";


class EmployeeService {
    

    async getAllEmployees(): Promise <Employee[]> {
        const response = await fetch('api/employees/list');
        const results: Employee[] = await response.json();
        return results;
        
    }

}

const employeeService = new EmployeeService();

export default employeeService;