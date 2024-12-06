import { SyntheticEvent } from "react";
// MUI
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";

// ==============================================================
interface Props {
  name: string;
  title: string;
  checked: boolean;
  handleChange: (event: SyntheticEvent<Element, Event>, checked: boolean) => void;
}
// ==============================================================

export default function FormLabel({ name, checked, title, handleChange }: Props) {
  return (
    <FormControlLabel
      name={name}
      onChange={handleChange}
      label={<Typography variant="h6">{title}</Typography>}
      control={<Radio checked={checked} color="primary" size="small" />}
    />
  );
}
