import Uploader from "../Uploader/Uploader";
import MoveLeft from "../MoveLeft/MoveLeft";
import MoveRight from "../MoveRight/MoveRight";

const Form = () => {
  return (
    <form>
      <Uploader />

      <MoveLeft />

      <MoveRight />
    </form>
  );
};

export default Form;
