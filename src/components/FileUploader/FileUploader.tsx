import { useContext, ChangeEvent } from "react";

import { AppStateContext } from "../AppState/useAppState";
import Uploader from "../Uploader/Uploader";
import { iAppState } from "../AppState/useAppState";

const FileUploader = () => {
  const { setAppState } = useContext(AppStateContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    setAppState({ ...iAppState, files });
  };

  return <Uploader label="Upload an Image" onChange={handleChange} />;
};

export default FileUploader;
