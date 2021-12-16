import Uploader from "../Uploader/Uploader";
import JsonUploader from "../JsonUploader/JsonUploader";
import MoveLeft from "../MoveLeft/MoveLeft";
import MoveRight from "../MoveRight/MoveRight";
import MoveUp from "../MoveUp/MoveUp";
import MoveDown from "../MoveDown/MoveDown";
import ScaleUp from "../ScaleUp/ScaleUp";
import ScaleDown from "../ScaleDown/ScaleDown";
import CanvasWidth from "../CanvasWidth/CanvasWidth";
import Export from "../Export/Export";

const Form = () => {
  return (
    <form>
      <Uploader />

      <div>-OR-</div>

      <JsonUploader />

      <MoveLeft />

      <MoveRight />

      <MoveUp />

      <MoveDown />

      <ScaleUp />

      <ScaleDown />

      <CanvasWidth />

      <Export />
    </form>
  );
};

export default Form;
