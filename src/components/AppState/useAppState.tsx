import { useState, createContext } from "react";

interface IAppState {
  files: any;
  canvasRef: any;
  uploaderRed: any;
}

const iAppState: IAppState = {
  files: {},
  canvasRef: null,
  uploaderRed: null,
};

interface IStateContext {
  appState: IAppState;
  setAppState: (state: IAppState) => void;
}

export const AppStateContext = createContext<IStateContext>({
  appState: iAppState,
  setAppState: (appState: IAppState) => {},
});

export const useAppState = () => {
  const [appState, setAppState] = useState(iAppState);

  return { appState, setAppState };
};
