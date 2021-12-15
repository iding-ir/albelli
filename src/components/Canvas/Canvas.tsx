import { useEffect, useContext, useRef } from "react";

import { AppStateContext } from "../AppState/useAppState";

const Canvas = () => {
  const { appState } = useContext(AppStateContext);
  const { files, x, y, scale } = appState;
  const canvasRef = useRef<any>(null);

  useEffect(() => {
    let file;

    for (let i = 0; i < files.length; ++i) {
      file = files[i];

      // check if file is valid Image (just a MIME check)
      switch (file.type) {
        case "image/jpeg":
        case "image/png":
        case "image/gif":
          // read Image contents from file
          const reader = new FileReader();

          reader.onload = (): any => {
            if (reader) {
              // create HTMLImageElement holding image data
              const img = new Image();

              img.src = reader.result as string;

              img.onload = function () {
                // grab some data from the image
                const width = img.naturalWidth;
                const height = img.naturalHeight;

                canvasRef.current.width = 500;
                canvasRef.current.height = (500 * height) / width;

                const ctx = canvasRef.current.getContext("2d");

                ctx.drawImage(
                  img,
                  0,
                  0,
                  width,
                  height,
                  x,
                  y,
                  canvasRef.current.width * scale,
                  canvasRef.current.height * scale
                );

                // do your magic here...
              };
            }
          };

          reader.readAsDataURL(file);

          // process just one file.
          return;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files, x, y, scale]);

  return <canvas ref={canvasRef}></canvas>;
};

export default Canvas;
