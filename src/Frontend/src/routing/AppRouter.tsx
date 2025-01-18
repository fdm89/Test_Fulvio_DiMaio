import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CustomerListPage from "../pages/CustomerListPage/CustomerListPage";
import EmployeeListPage from "../pages/EmployeeListPage/EmployeeListPage";
import SupplierListPage from "../pages/SupplierListPage/SupplierListPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/SupplierList" element={<SupplierListPage />} />
      <Route path="/CustomerList" element={<CustomerListPage />} />
      <Route path="/EmployeeList" element={<EmployeeListPage />} />
      
    </Routes>
  );
}

