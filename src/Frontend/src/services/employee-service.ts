import { Employee } from "../types";


class EmployeeService {
    

    async getAllEmployees(firstName?: string, lastName?: string): Promise <Employee[]> {
        let requestUrl = `api/employees/list`;
        if(firstName){
            requestUrl += `?&FirstName=${firstName}`
        }
        if(lastName){
            requestUrl += `?&LastName=${lastName}`
        }
       
        const response = await fetch(requestUrl);
        const results: Employee[] = await response.json();
        return results;
        
    }

}

const employeeService = new EmployeeService();

export default employeeService;