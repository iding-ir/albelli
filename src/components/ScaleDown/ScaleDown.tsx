import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import ZoomInMap from "@mui/icons-material/ZoomInMap";

import { AppStateContext } from "../AppState/useAppState";

const ScaleDown = () => {
  const { appState, setAppState } = useContext(AppStateContext);

  const { scale } = appState;

  const onClick = () => {
    if (scale > 5) {
      return;
    }

    setAppState({ ...appState, scale: scale * 1.25 });
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
