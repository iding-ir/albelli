import { useState, useEffect, useContext } from "react";
import TextField from "@mui/material/TextField";

import { AppStateContext } from "../../hooks/useAppState";
import Button from "../Button/Button";
import download from "../../utils/download";
import "./styles.scss";
import { ExportJson } from "../../types";

const Export = () => {
  const [exportObject, setExportObject] = useState({});
  const { appState } = useContext(AppStateContext);
  const { files, jsons, width, height, x, y, w, h, scale, result, id } =
    appState;

  useEffect(() => {
    const exportObject: ExportJson = {
      canvas: {
        width: width,
        height: height,
        photo: {
          id,
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
  }, [files, jsons, width, height, x, y, w, h, scale, result, id]);

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
        onClick={() => download("exportTextarea", `${id}.json`)}
        disabled={!id}
      />
    </>
  ) : null;
};

export default Export;
