import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import ZoomOutMap from "@mui/icons-material/ZoomOutMap";

import { AppStateContext } from "../AppState/useAppState";
import { SCALE_STEP, MIN_SCALE } from "../../constants";

const ScaleUp = () => {
  const { appState, setAppState } = useContext(AppStateContext);

  const { scale } = appState;

  const onClick = () => {
    if (scale < MIN_SCALE) {
      return;
    }

    setAppState({ ...appState, scale: scale / SCALE_STEP });
  };

  return (
    <IconButton
      onClick={onClick}
      size="large"
      color="secondary"
      aria-label="Scale Up"
      sx={{ mr: 2 }}
    >
      <ZoomOutMap />
    </IconButton>
  );
};

export default ScaleUp;
