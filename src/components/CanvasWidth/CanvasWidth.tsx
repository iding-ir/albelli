import { useState, useContext, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";

import { AppStateContext } from "../AppState/useAppState";

const CanvasWidth = () => {
  const { appState, setAppState } = useContext(AppStateContext);
  const { canvasWidth } = appState;
  const [width, setWidth] = useState(canvasWidth);

  const minWidth = 100;
  const maxWidth = 1000;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const width = parseInt(event.target.value);

    if (width < minWidth || width > maxWidth) {
      return;
    }

    setWidth(width);

    setAppState({ ...appState, canvasWidth: width });
  };

  return (
    <>
      <TextField
        type="number"
        id="canvasWidth"
        inputProps={{ min: minWidth, max: maxWidth, step: 50 }}
        value={width}
        onChange={onChange}
        label="Canvas Width"
        variant="outlined"
      />
    </>
  );
};

export default CanvasWidth;
