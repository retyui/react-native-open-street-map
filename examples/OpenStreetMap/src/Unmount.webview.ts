import { MarkerCommands } from "./Marker.interface";
import { WebCommand } from "./types";
import { CustomWindow } from "./types.webview";

export const Unmount = (
  command: MarkerCommands & WebCommand,
  context: CustomWindow["__context"]
) => {
  context.removeInstance(command.id);
};
