import { useContext } from "react";

import { AppStateContext } from "../AppState/useAppState";
import Button from "../Button/Button";

const MoveRight = () => {
  const { appState, setAppState } = useContext(AppStateContext);

  const { x } = appState;

  const onClick = () => {
    setAppState({ ...appState, x: x + 1 });
  };

  return <Button label="Move Right" onClick={onClick} />;
};

export default MoveRight;
