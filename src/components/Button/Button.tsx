import { ReactNode, MouseEventHandler } from "react";
import MuiButton from "@mui/material/Button";
interface IProps {
  label: string | ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

const Button = ({ label, onClick, disabled }: IProps) => {
  return (
    <MuiButton
      sx={{ margin: "0 1rem" }}
      disabled={disabled}
      variant="contained"
      onClick={onClick}
      size="large"
    >
      {label}
    </MuiButton>
  );
};

export default Button;
