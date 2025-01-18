// Suppliers Interface

export interface SupplierListQuery {
    id: number;
    name: string;
    address: string;
    email: string;
    phone: string;
  }


// Employee interface

export interface Employee {
  id: number;
  code: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
  department?: Department;
}


export interface Department {
  code: string;
  description: string;
}
