export interface ExportJson {
  canvas: {
    width: number;
    height: number | null;
    photo: {
      id: string | null;
      w: number;
      h: number;
      x: number;
      y: number;
      scale: number;
      result: string | ArrayBuffer | null;
    };
  };
}
