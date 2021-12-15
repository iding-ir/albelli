import { useContext } from "react";

import { AppStateContext } from "../AppState/useAppState";

import Button from "../Button/Button";

const MoveLeft = () => {
  const { appState, setAppState } = useContext(AppStateContext);

  const { x } = appState;

  const onClick = () => {
    setAppState({ ...appState, x: x - 1 });
  };

  return <Button label="Move Left" onClick={onClick} />;
};

export default MoveLeft;
