import { useState, createContext } from "react";

interface IAppState {
  files: FileList | null;
  canvasWidth: number;
  x: number;
  y: number;
  scale: number;
}

const iAppState: IAppState = {
  files: null,
  canvasWidth: 500,
  x: 0,
  y: 0,
  scale: 1,
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
