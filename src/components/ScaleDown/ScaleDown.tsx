import { useContext } from "react";

import { AppStateContext } from "../AppState/useAppState";

import Button from "../Button/Button";

const ScaleDown = () => {
  const { appState, setAppState } = useContext(AppStateContext);

  const { scale } = appState;

  const onClick = () => {
    setAppState({ ...appState, scale: scale / 1.25 });
  };

  return <Button label="Scale Down" onClick={onClick} />;
};

export default ScaleDown;
