import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

interface FilterProps {
  onFilter: (firstName?: string, lastName?: string) => void;
}

export default function FilterComponent({ onFilter }: FilterProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFilter = () => {
    onFilter(firstName, lastName);
  };

  return (
    <Box display="flex" gap={2} alignItems="center">
      <TextField
        label="First Name"
        variant="outlined"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Button variant="contained" onClick={handleFilter}>
        Filter
      </Button>
    </Box>
  );
}
