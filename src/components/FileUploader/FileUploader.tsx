import { useContext, ChangeEvent } from "react";

import { AppStateContext } from "../AppState/useAppState";
import Uploader from "../Uploader/Uploader";

const FileUploader = () => {
  const { appState, setAppState } = useContext(AppStateContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    setAppState({ ...appState, files });
  };

  return <Uploader label="Upload an Image" onChange={handleChange} />;
};

export default FileUploader;
