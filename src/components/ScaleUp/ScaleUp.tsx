import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import ZoomInMap from "@mui/icons-material/ZoomInMap";

import { AppStateContext } from "../../hooks/useAppState";
import { SCALE_STEP, MAX_SCALE } from "../../constants";

const ScaleDown = () => {
  const { appState, setAppState } = useContext(AppStateContext);

  const { scale } = appState;

  const onClick = () => {
    if (scale > MAX_SCALE) {
      return;
    }

    setAppState({ ...appState, scale: scale * SCALE_STEP });
  };

  return (
    <IconButton
      onClick={onClick}
      size="large"
      color="secondary"
      aria-label="Scale Down"
      sx={{ mr: 2 }}
    >
      <ZoomInMap />
    </IconButton>
  );
};

export default ScaleDown;
