import { useContext, ChangeEvent } from "react";

import { AppStateContext } from "../AppState/useAppState";

const JsonUploader = () => {
  const { appState, setAppState } = useContext(AppStateContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const jsons = event.target.files;

    setAppState({ ...appState, jsons });
  };

  return (
    <fieldset>
      <label htmlFor="jsonSelector">Select a JSON file</label>

      <input type="file" id="jsonSelector" onChange={handleChange} />
    </fieldset>
  );
};

export default JsonUploader;
