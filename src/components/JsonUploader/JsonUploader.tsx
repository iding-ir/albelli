import { useContext, ChangeEvent } from "react";

import { AppStateContext } from "../AppState/useAppState";
import Uploader from "../Uploader/Uploader";

const JsonUploader = () => {
  const { appState, setAppState } = useContext(AppStateContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const jsons = event.target.files;

    setAppState({ ...appState, jsons });
  };

  return <Uploader label="Upload a JSON File" onChange={handleChange} />;
};

export default JsonUploader;
