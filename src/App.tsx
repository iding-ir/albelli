import CssBaseline from "@mui/material/CssBaseline";

import Header from "./components//Header/Header";
import Form from "./components/Form/Form";
import Canvas from "./components/Canvas/Canvas";
import {
  useAppState,
  AppStateContext,
} from "./components/AppState/useAppState";

function App() {
  const stateValues = useAppState();

  return (
    <AppStateContext.Provider value={stateValues}>
      <CssBaseline />

      <Header />

      <Form />

      <Canvas />
    </AppStateContext.Provider>
  );
}

export default App;
