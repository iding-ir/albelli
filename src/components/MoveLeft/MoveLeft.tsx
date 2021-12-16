import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";

import { AppStateContext } from "../AppState/useAppState";

const MoveLeft = () => {
  const { appState, setAppState } = useContext(AppStateContext);

  const { x } = appState;

  const onClick = () => {
    setAppState({ ...appState, x: x - 1 });
  };

  return (
    <IconButton
      onClick={onClick}
      size="large"
      color="secondary"
      aria-label="Move Left"
      sx={{ mr: 2 }}
    >
      <KeyboardArrowLeft />
    </IconButton>
  );
};

export default MoveLeft;
