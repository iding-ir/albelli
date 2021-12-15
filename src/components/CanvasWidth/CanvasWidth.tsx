import { useState, useContext } from "react";

import { AppStateContext } from "../AppState/useAppState";

const CanvasWidth = () => {
  const { appState, setAppState } = useContext(AppStateContext);
  const { canvasWidth } = appState;
  const [width, setWidth] = useState(canvasWidth);

  const minWidth = 100;
  const maxWidth = 1000;

  const onChange = (event: any) => {
    const width = parseInt(event.target.value);

    if (width < minWidth || width > maxWidth) {
      return;
    }

    setWidth(width);

    setAppState({ ...appState, canvasWidth: width });
  };

  return (
    <>
      <label htmlFor="canvasWidth">Canvas Width</label>

      <input
        type="number"
        id="canvasWidth"
        step={50}
        min={minWidth}
        max={maxWidth}
        value={width}
        onChange={onChange}
      />
    </>
  );
};

export default CanvasWidth;
