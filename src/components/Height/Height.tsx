import { useContext, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";

import { AppStateContext } from "../AppState/useAppState";

const Height = () => {
  const { appState, setAppState } = useContext(AppStateContext);
  const { height } = appState;

  const minHeight = 100;
  const maxHeight = 1000;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const height = parseInt(event.target.value);

    if (height < minHeight || height > maxHeight) {
      return;
    }

    setAppState({ ...appState, height });
  };

  return (
    <>
      <TextField
        type="number"
        id="height"
        inputProps={{ min: minHeight, max: maxHeight, step: 50 }}
        value={height}
        onChange={onChange}
        label="Canvas Height"
        variant="outlined"
      />
    </>
  );
};

export default Height;
