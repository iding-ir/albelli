import { useContext, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";

import { AppStateContext } from "../../hooks/useAppState";
import { CANVAS_MAX_SIZE, CANVAS_MIN_SIZE } from "../../constants";

const CanvasWidth = () => {
  const { appState, setAppState } = useContext(AppStateContext);
  const { width } = appState;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const width = parseInt(event.target.value);

    if (width < CANVAS_MIN_SIZE || width > CANVAS_MAX_SIZE) {
      return;
    }

    setAppState({ ...appState, width });
  };

  return (
    <>
      <TextField
        type="number"
        id="width"
        inputProps={{ min: CANVAS_MIN_SIZE, max: CANVAS_MAX_SIZE, step: 50 }}
        value={width}
        onChange={onChange}
        label="Canvas Width"
        variant="outlined"
        sx={{ margin: "0 0.5rem" }}
      />
    </>
  );
};

export default CanvasWidth;
