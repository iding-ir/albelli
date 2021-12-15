import Header from "./components//Header/Header";
import Form from "./components/Form/Form";
import Canvas from "./components/Canvas/Canvas";
import {
  useAppState,
  AppStateContext,
} from "./components/AppState/useAppState";
import "./App.scss";

function App() {
  const stateValues = useAppState();

  return (
    <AppStateContext.Provider value={stateValues}>
      <div className="App">
        <Header />

        <Form />

        <Canvas />
      </div>
    </AppStateContext.Provider>
  );
}

export default App;
