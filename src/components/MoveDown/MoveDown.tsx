import { useContext } from "react";

import { AppStateContext } from "../AppState/useAppState";

import Button from "../Button/Button";

const MoveDown = () => {
  const { appState, setAppState } = useContext(AppStateContext);

  const { y } = appState;

  const onClick = () => {
    setAppState({ ...appState, y: y + 1 });
  };

  return <Button label="Move Down" onClick={onClick} />;
};

export default MoveDown;
