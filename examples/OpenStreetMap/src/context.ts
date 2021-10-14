import { createContext, useContext } from "react";

export const MapContext = createContext({
  onMessage: (scope: string, fn: (event: unknown) => void) => () => {},
  toWebView<T>(id: string, displayName: string, commands: T[]) {},
});

export const useMapContext = () => useContext(MapContext);
