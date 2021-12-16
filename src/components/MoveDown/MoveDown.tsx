import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

import { AppStateContext } from "../AppState/useAppState";
import { MOVE_STEP } from "../../constants";

const MoveDown = () => {
  const { appState, setAppState } = useContext(AppStateContext);

  const { y } = appState;

  const onClick = () => {
    setAppState({ ...appState, y: y + MOVE_STEP });
  };

  return (
    <IconButton
      onClick={onClick}
      size="large"
      color="secondary"
      aria-label="Move Down"
      sx={{ mr: 2 }}
    >
      <KeyboardArrowDown />
    </IconButton>
  );
};

export default MoveDown;
