import { useEffect, useContext, useRef } from "react";

import { AppStateContext } from "../AppState/useAppState";
import "./style.scss";

const Canvas = () => {
  const { appState, setAppState } = useContext(AppStateContext);
  const { files, jsons, canvasWidth, x, y, scale } = appState;
  const canvasRef = useRef<any>(null);

  const onLoad = (result: string | ArrayBuffer | null) => {
    console.log(result);

    // create HTMLImageElement holding image data
    const img = new Image();

    img.src = result as string;

    img.onload = function () {
      // grab some data from the image
      const w = img.naturalWidth;
      const h = img.naturalHeight;

      setAppState({ ...appState, w, h, result });

      canvasRef.current.width = canvasWidth;
      canvasRef.current.height = (canvasWidth * h) / w;

      const ctx = canvasRef.current.getContext("2d");

      ctx.drawImage(
        img,
        0,
        0,
        w * scale,
        h * scale,
        x,
        y,
        canvasRef.current.width,
        canvasRef.current.height
      );

      // do your magic here...
    };
  };

  useEffect(() => {
    let file;

    if (files) {
      for (let i = 0; i < files.length; ++i) {
        file = files[i];

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
  }, [files, canvasWidth, x, y, scale]);

  useEffect(() => {
    let json;

    if (jsons) {
      for (let i = 0; i < jsons.length; ++i) {
        json = jsons[i];

        // check if file is valid JSON (just a MIME check)
        switch (json.type) {
          case "application/json":
            // read JSON contents from file
            const reader = new FileReader();

            reader.onload = () => {
              const result = reader.result as string;

              const encoded = result.replace(
                "data:application/json;base64,",
                ""
              );

              const decoded = atob(encoded);

              const parsedJSON = JSON.parse(decoded);

              const base64Image = parsedJSON.canvas.photo.result;

              setAppState({ ...appState, base64Image });

              onLoad(base64Image);
            };

            reader.readAsDataURL(json);

            // process just one file.
            return;
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jsons, canvasWidth, x, y, scale]);

  return files || jsons ? (
    <div className="canvas">
      <canvas ref={canvasRef}></canvas>
    </div>
  ) : null;
};

export default Canvas;
