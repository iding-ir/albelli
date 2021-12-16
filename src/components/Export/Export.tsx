import { useState, useEffect, useContext } from "react";

import { AppStateContext } from "../AppState/useAppState";
import Button from "../Button/Button";
import download from "../../utils/download";
import "./styles.scss";

const Export = () => {
  const [exportObject, setExportObject] = useState({});
  const { appState } = useContext(AppStateContext);
  const { files, canvasWidth, x, y, w, h, scale, result } = appState;

  useEffect(() => {
    const exportObject = {
      canvas: {
        width: canvasWidth,
        height: (canvasWidth * h) / w,
        photo: {
          id: files && files[0].name,
          width: w,
          height: h,
          x,
          y,
          scale,
          result,
        },
      },
    };

    setExportObject(exportObject);
  }, [files, canvasWidth, x, y, w, h, scale, result]);

  return files ? (
    <>
      <textarea
        readOnly
        id="exportTextarea"
        value={JSON.stringify(exportObject)}
      />

      <Button
        label="Download as JSON"
        onClick={() => download("exportTextarea", "export.json")}
      />
    </>
  ) : null;
};

export default Export;
