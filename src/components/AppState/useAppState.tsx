import { useState, createContext } from "react";

interface IAppState {
  files: any;
  x: number;
  y: number;
}

const iAppState: IAppState = {
  files: {},
  x: 0,
  y: 0,
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
