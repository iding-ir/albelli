import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import { AppStateContext } from "../AppState/useAppState";
import { MOVE_STEP } from "../../constants";

const MoveRight = () => {
  const { appState, setAppState } = useContext(AppStateContext);

  const { x } = appState;

  const onClick = () => {
    setAppState({ ...appState, x: x + MOVE_STEP });
  };

  return (
    <IconButton
      onClick={onClick}
      size="large"
      color="secondary"
      aria-label="Move Right"
      sx={{ mr: 2 }}
    >
      <KeyboardArrowRight />
    </IconButton>
  );
};

export default MoveRight;
