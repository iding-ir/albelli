import { useContext, ChangeEvent } from "react";

import { AppStateContext } from "../AppState/useAppState";

const Uploader = () => {
  const { appState, setAppState } = useContext(AppStateContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    setAppState({ ...appState, files });
  };

  return (
    <fieldset>
      <label htmlFor="fileSelector">Select an Image file</label>

      <input type="file" id="fileSelector" onChange={handleChange} />
    </fieldset>
  );
};

export default Uploader;
