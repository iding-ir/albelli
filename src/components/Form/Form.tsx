import Uploader from "../Uploader/Uploader";
import MoveLeft from "../MoveLeft/MoveLeft";
import MoveRight from "../MoveRight/MoveRight";
import MoveUp from "../MoveUp/MoveUp";
import MoveDown from "../MoveDown/MoveDown";
import ScaleUp from "../ScaleUp/ScaleUp";
import ScaleDown from "../ScaleDown/ScaleDown";

const Form = () => {
  return (
    <form>
      <Uploader />

      <MoveLeft />

      <MoveRight />

      <MoveUp />

      <MoveDown />

      <ScaleUp />

      <ScaleDown />
    </form>
  );
};

export default Form;
