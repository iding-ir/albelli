import { useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { AppStateContext } from "../AppState/useAppState";
import MoveLeft from "../MoveLeft/MoveLeft";
import MoveRight from "../MoveRight/MoveRight";
import MoveUp from "../MoveUp/MoveUp";
import MoveDown from "../MoveDown/MoveDown";
import ScaleUp from "../ScaleUp/ScaleUp";
import ScaleDown from "../ScaleDown/ScaleDown";
import CanvasWidth from "../CanvasWidth/CanvasWidth";
import Export from "../Export/Export";

const Form = () => {
  const { appState } = useContext(AppStateContext);
  const { files, jsons } = appState;

  return (
    <Box sx={{ padding: "1rem" }}>
      {files || jsons ? (
        <form>
          <MoveLeft />

          <MoveRight />

          <MoveUp />

          <MoveDown />

          <ScaleUp />

          <ScaleDown />

          <CanvasWidth />

          <Export />
        </form>
      ) : (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Please upload an Image or a JSON file first.
        </Typography>
      )}
    </Box>
  );
};

export default Form;
