import { Marker as LMarker } from "leaflet";

export interface WebMapContext {
  elements: Record<string, unknown>;
  map: any;
  getInstance<T>(id?: string | null): LMarker | undefined;
  addInstance(id: string, instance: unknown): void;
  removeInstance(id: string): void;
}

export interface CustomWindow {
  __map: ReturnType<typeof import("leaflet")["map"]>;
  __context: WebMapContext;
  __runCommand: (msg: string) => void;

  L: {
    setOptions: typeof import("leaflet")["setOptions"];
    map: typeof import("leaflet")["map"];
    tileLayer: typeof import("leaflet")["tileLayer"];
    marker: typeof import("leaflet")["marker"];
    icon: typeof import("leaflet")["icon"];
    tooltip: typeof import("leaflet")["tooltip"];
    Icon: {
      Default: typeof import("leaflet")["Icon"]["Default"];
    };
  };
  ReactNativeWebView?: {
    postMessage: (msg: string) => void;
  };
  toMobileNative: (data: object) => void;
  allCommandHandler: any;
}
