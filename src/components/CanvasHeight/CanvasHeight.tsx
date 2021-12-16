import { useContext, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";

import { AppStateContext } from "../../hooks/useAppState";
import { CANVAS_MAX_SIZE, CANVAS_MIN_SIZE } from "../../constants";

const CanvasHeight = () => {
  const { appState, setAppState } = useContext(AppStateContext);
  const { height } = appState;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const height = parseInt(event.target.value);

    if (height < CANVAS_MIN_SIZE || height > CANVAS_MAX_SIZE) {
      return;
    }

    setAppState({ ...appState, height });
  };

  return (
    <>
      <TextField
        type="number"
        id="height"
        inputProps={{ min: CANVAS_MIN_SIZE, max: CANVAS_MAX_SIZE, step: 50 }}
        value={height}
        onChange={onChange}
        label="Canvas Height"
        variant="outlined"
        sx={{ margin: "0 0.5rem" }}
      />
    </>
  );
};

export default CanvasHeight;
