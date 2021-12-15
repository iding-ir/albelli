import { useContext } from "react";

import { AppStateContext } from "../AppState/useAppState";
import Button from "../Button/Button";

const ScaleUp = () => {
  const { appState, setAppState } = useContext(AppStateContext);

  const { scale } = appState;

  const onClick = () => {
    if (scale < 0.5) {
      return;
    }

    setAppState({ ...appState, scale: scale / 1.25 });
  };

  return <Button label="Scale Up" onClick={onClick} />;
};

export default ScaleUp;
