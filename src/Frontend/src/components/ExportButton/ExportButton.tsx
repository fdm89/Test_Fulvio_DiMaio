import {Button} from "@mui/material";
import { Employee } from "../../types";

interface ButtonProps {
    employees: Employee[]
}

export default function ExportButton ({employees}: ButtonProps) {

    const exportXML = () => {
        
        const xmlData = `
    <employees>
    ${employees
      .map(
        (employee: Employee) => `
      <employee>
        <id>${employee.id}</id>
        <code>${employee.code}</code>
        <firstName>${employee.firstName}</firstName>
        <lastName>${employee.lastName}</lastName>
        <address>${employee.address}</address>
        <email>${employee.email}</email>
        <phone>${employee.phone}</phone>
        <department>
          <code>${employee.department?.code}</code>
          <description>${employee.department?.description}</description>
        </department>
      </employee>
    `
      )
      .join("")}
    </employees>`;

    const blob = new Blob([xmlData], { type: "application/xml" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "employees.xml";
    link.click();
  };

    return (
        <Button onClick={exportXML} variant="contained">
            Export
        </Button>
    )

}