import { useContext, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";

import { AppStateContext } from "../AppState/useAppState";

const FileName = () => {
  const { appState, setAppState } = useContext(AppStateContext);
  const { id } = appState;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAppState({ ...appState, id: event.target.value });
  };

  return (
    <>
      <TextField
        InputLabelProps={{ shrink: true }}
        id="file-name"
        value={id}
        onChange={onChange}
        label="File Name"
        variant="outlined"
      />
    </>
  );
};

export default FileName;
