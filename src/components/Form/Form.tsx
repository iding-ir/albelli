import { useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { AppStateContext } from "../AppState/useAppState";
import MoveLeft from "../MoveLeft/MoveLeft";
import MoveRight from "../MoveRight/MoveRight";
import MoveUp from "../MoveUp/MoveUp";
import MoveDown from "../MoveDown/MoveDown";
import ScaleUp from "../ScaleDown/ScaleDown";
import ScaleDown from "../ScaleUp/ScaleUp";
import Width from "../CanvasWidth/CanvasWidth";
import Height from "../CanvasHeight/CanvasHeight";
import FileName from "../FileName/FileName";
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

          <Width />

          <Height />

          <FileName />

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
