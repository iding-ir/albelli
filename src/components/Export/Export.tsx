import { useState, useEffect, useContext } from "react";
import TextField from "@mui/material/TextField";

import { AppStateContext } from "../AppState/useAppState";
import Button from "../Button/Button";
import download from "../../utils/download";
import "./styles.scss";
import { ExportJson } from "../../types";

const Export = () => {
  const [exportObject, setExportObject] = useState({});
  const { appState } = useContext(AppStateContext);
  const { files, jsons, canvasWidth, canvasHeight, x, y, w, h, scale, result } =
    appState;

  useEffect(() => {
    const exportObject: ExportJson = {
      canvas: {
        width: canvasWidth,
        height: canvasHeight,
        photo: {
          id: files && files[0].name,
          w,
          h,
          x,
          y,
          scale,
          result,
        },
      },
    };

    setExportObject(exportObject);
  }, [files, jsons, canvasWidth, canvasHeight, x, y, w, h, scale, result]);

  return files || jsons ? (
    <>
      <TextField
        inputProps={{ readOnly: true }}
        multiline
        id="exportTextarea"
        value={JSON.stringify(exportObject)}
        label="Export Code"
        variant="outlined"
        sx={{ display: "none" }}
      />

      <Button
        label="Download as JSON"
        onClick={() => download("exportTextarea", "export.json")}
      />
    </>
  ) : null;
};

export default Export;
