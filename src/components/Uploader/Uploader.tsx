import MuiButton from "@mui/material/Button";
interface IProps {
  label: string;
  onChange: any;
}

const Uploader = ({ label, onChange }: IProps) => {
  return (
    <MuiButton
      sx={{ margin: "0 0.5rem" }}
      variant="contained"
      component="label"
    >
      {label}
      <input type="file" hidden onChange={onChange} />
    </MuiButton>
  );
};

export default Uploader;
