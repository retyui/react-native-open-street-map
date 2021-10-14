import type { IconCommand } from "./Icon.interface";
import type { Icon as LIcon, Map } from "leaflet";
import type { WebCommand } from "./types";
import type { CustomWindow } from "./types.webview";

declare const window: CustomWindow;

interface WebContext {
  map: Map;
  getInstance(id: string): any;
  getInstance(id: string | undefined): undefined;
  addInstance(id: string, instance: any): void;
}

export function Icon(command: IconCommand & WebCommand, context: WebContext) {
  if (command.method === "constructor") {
    const instance: LIcon = window.L.icon(command.data);

    return context.addInstance(command.id, instance);
  }
}
