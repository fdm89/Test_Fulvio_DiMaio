import { SupplierListQuery } from "../types";


class SupplierService {
    

    async getAllSuppliers(): Promise <SupplierListQuery[]> {
        const response = await fetch('/api/suppliers/list');
        const results: SupplierListQuery[] = await response.json();
        return results;
    }

}

const supplierService = new SupplierService();

export default supplierService;

