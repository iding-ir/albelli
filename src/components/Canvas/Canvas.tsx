import { useEffect, useContext, useRef } from "react";

import { AppStateContext } from "../AppState/useAppState";
import "./style.scss";

const Canvas = () => {
  const { appState, setAppState } = useContext(AppStateContext);
  const { files, canvasWidth, x, y, scale } = appState;
  const canvasRef = useRef<any>(null);

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
              // create HTMLImageElement holding image data
              const img = new Image();

              img.src = reader.result as string;

              img.onload = function () {
                // grab some data from the image
                const w = img.naturalWidth;
                const h = img.naturalHeight;
                const result = reader.result;

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

            reader.readAsDataURL(file);

            // process just one file.
            return;
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files, canvasWidth, x, y, scale]);

  return files ? (
    <div className="canvas">
      <canvas ref={canvasRef}></canvas>
    </div>
  ) : null;
};

export default Canvas;
