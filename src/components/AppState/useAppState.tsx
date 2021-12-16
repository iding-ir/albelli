import { useState, createContext } from "react";

interface IAppState {
  id: string | null;
  files: FileList | null;
  jsons: FileList | null;
  width: number;
  height: number;
  x: number;
  y: number;
  w: number;
  h: number;
  scale: number;
  result: string | ArrayBuffer | null;
  base64Image: string;
  jsonHasLoaded: boolean;
}

export const iAppState: IAppState = {
  id: null,
  files: null,
  jsons: null,
  width: 500,
  height: 300,
  x: 0,
  y: 0,
  w: 0,
  h: 0,
  scale: 1,
  result: null,
  base64Image: "",
  jsonHasLoaded: false,
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
