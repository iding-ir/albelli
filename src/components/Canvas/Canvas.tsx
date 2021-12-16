import { useEffect, useContext, useRef } from "react";

import { AppStateContext } from "../AppState/useAppState";
import "./style.scss";
import { ExportJson } from "../../types";

const Canvas = () => {
  const { appState, setAppState } = useContext(AppStateContext);
  const { files, jsons, canvasWidth, canvasHeight, x, y, scale } = appState;
  const canvasRef = useRef<any>(null);

  const onLoad = (
    result: string | ArrayBuffer | null,
    parsedJSON?: ExportJson
  ) => {
    // create HTMLImageElement holding image data
    const img = new Image();

    img.src = result as string;

    img.onload = function () {
      // grab some data from the image
      const w = img.naturalWidth;
      const h = img.naturalHeight;

      if (parsedJSON) {
        const {
          height: canvasHeight,
          width: canvasWidth,
          photo,
        } = parsedJSON.canvas;

        const { x, y, w, h, scale } = photo;

        setAppState({
          ...appState,
          result,
          canvasWidth: appState.canvasWidth || canvasWidth,
          canvasHeight: appState.canvasHeight || canvasHeight,
          x: appState.x || x,
          y: appState.y || y,
          w: appState.w || w,
          h: appState.h || h,
          scale: appState.scale || scale,
        });
      } else {
        setAppState({ ...appState, w, h, result });
      }

      canvasRef.current.width = canvasWidth;
      canvasRef.current.height = canvasHeight;

      const ctx = canvasRef.current.getContext("2d");

      ctx.drawImage(img, 0, 0, w / scale, h / scale, x, y, w, h);
    };
  };

  useEffect(() => {
    if (files) {
      for (let i = 0; i < files.length; ++i) {
        const file = files[i];

        // check if file is valid Image (just a MIME check)
        switch (file.type) {
          case "image/jpeg":
          case "image/png":
          case "image/gif":
            // read Image contents from file
            const reader = new FileReader();

            reader.onload = () => {
              onLoad(reader.result);
            };

            reader.readAsDataURL(file);

            // process just one file.
            return;
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files, canvasWidth, canvasHeight, x, y, scale]);

  useEffect(() => {
    if (jsons) {
      for (let i = 0; i < jsons.length; ++i) {
        const json = jsons[i];

        // check if file is valid JSON (just a MIME check)
        switch (json.type) {
          case "application/json":
            // read JSON contents from file
            const reader = new FileReader();

            reader.onload = () => {
              const jsonResult = reader.result as string;

              const encoded = jsonResult.replace(
                "data:application/json;base64,",
                ""
              );

              const decoded = atob(encoded);

              const parsedJSON = JSON.parse(decoded);

              const result = parsedJSON.canvas.photo.result;

              onLoad(result, parsedJSON);
            };

            reader.readAsDataURL(json);

            // process just one file.
            return;
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jsons, canvasWidth, canvasHeight, x, y, scale]);

  return files || jsons ? (
    <div className="canvas">
      <canvas ref={canvasRef}></canvas>
    </div>
  ) : null;
};

export default Canvas;
