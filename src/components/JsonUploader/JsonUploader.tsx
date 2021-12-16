import { useContext, ChangeEvent } from "react";

import { AppStateContext } from "../../hooks/useAppState";
import Uploader from "../Uploader/Uploader";
import { iAppState } from "../../hooks/useAppState";

const JsonUploader = () => {
  const { setAppState } = useContext(AppStateContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const jsons = event.target.files;

    setAppState({ ...iAppState, jsons });
  };

  return <Uploader label="Upload a JSON File" onChange={handleChange} />;
};

export default JsonUploader;
