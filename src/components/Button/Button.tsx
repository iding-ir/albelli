import { ReactNode, MouseEventHandler } from "react";
import MuiButton from "@mui/material/Button";
interface IProps {
  label: string | ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ label, onClick }: IProps) => {
  return (
    <MuiButton sx={{ margin: "0 1rem" }} variant="contained" onClick={onClick}>
      {label}
    </MuiButton>
  );
};

export default Button;
