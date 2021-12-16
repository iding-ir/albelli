import { useState, useContext, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";

import { AppStateContext } from "../AppState/useAppState";

const CanvasHeight = () => {
  const { appState, setAppState } = useContext(AppStateContext);
  const { canvasHeight } = appState;
  const [height, setHeight] = useState(canvasHeight);

  const minHeight = 100;
  const maxHeight = 1000;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const height = parseInt(event.target.value);

    if (height < minHeight || height > maxHeight) {
      return;
    }

    setHeight(height);

    setAppState({ ...appState, canvasHeight: height });
  };

  return (
    <>
      <TextField
        type="number"
        id="canvasHeight"
        inputProps={{ min: minHeight, max: maxHeight, step: 50 }}
        value={height}
        onChange={onChange}
        label="Canvas Height"
        variant="outlined"
      />
    </>
  );
};

export default CanvasHeight;
