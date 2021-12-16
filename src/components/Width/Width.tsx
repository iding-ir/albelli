import { useContext, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";

import { AppStateContext } from "../AppState/useAppState";

const Width = () => {
  const { appState, setAppState } = useContext(AppStateContext);
  const { width } = appState;

  const minWidth = 100;
  const maxWidth = 1000;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const width = parseInt(event.target.value);

    if (width < minWidth || width > maxWidth) {
      return;
    }

    setAppState({ ...appState, width });
  };

  return (
    <>
      <TextField
        type="number"
        id="width"
        inputProps={{ min: minWidth, max: maxWidth, step: 50 }}
        value={width}
        onChange={onChange}
        label="Canvas Width"
        variant="outlined"
      />
    </>
  );
};

export default Width;
