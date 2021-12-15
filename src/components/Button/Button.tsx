import { MouseEventHandler } from "react";
interface IProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ label, onClick }: IProps) => {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
