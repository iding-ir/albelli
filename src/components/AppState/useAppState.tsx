import { useState, createContext } from "react";

interface IAppState {
  files: FileList | null;
  jsons: FileList | null;
  canvasWidth: number;
  canvasHeight: number;
  x: number;
  y: number;
  w: number;
  h: number;
  scale: number;
  result: string | ArrayBuffer | null;
  base64Image: string;
}

export const iAppState: IAppState = {
  files: null,
  jsons: null,
  canvasWidth: 500,
  canvasHeight: 500,
  x: 0,
  y: 0,
  w: 0,
  h: 0,
  scale: 1,
  result: null,
  base64Image: "",
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
