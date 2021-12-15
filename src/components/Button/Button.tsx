interface IProps {
  label: string;
}

const Button = ({ label }: IProps) => {
  return <button>{label}</button>;
};

export default Button;
