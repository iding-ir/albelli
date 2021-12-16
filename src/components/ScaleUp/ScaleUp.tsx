import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import ZoomOutMap from "@mui/icons-material/ZoomOutMap";

import { AppStateContext } from "../AppState/useAppState";

const ScaleUp = () => {
  const { appState, setAppState } = useContext(AppStateContext);

  const { scale } = appState;

  const onClick = () => {
    if (scale < 0.5) {
      return;
    }

    setAppState({ ...appState, scale: scale / 1.25 });
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
