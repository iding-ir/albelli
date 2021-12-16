import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";

import { AppStateContext } from "../AppState/useAppState";
import { MOVE_STEP } from "../../constants";

const MoveUp = () => {
  const { appState, setAppState } = useContext(AppStateContext);

  const { y } = appState;

  const onClick = () => {
    setAppState({ ...appState, y: y - MOVE_STEP });
  };

  return (
    <IconButton
      onClick={onClick}
      size="large"
      color="secondary"
      aria-label="Move Up"
      sx={{ mr: 2 }}
    >
      <KeyboardArrowUp />
    </IconButton>
  );
};

export default MoveUp;
