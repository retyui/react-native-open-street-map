import type { TooltipCommands } from "./Tooltip.types";
import type { Tooltip as LTooltip } from "leaflet";
import type { WebCommand } from "../types";
import type { CustomWindow, WebMapContext } from "../types.webview";

declare const window: CustomWindow;

export function Tooltip(
  command: TooltipCommands & WebCommand,
  context: WebMapContext
) {
  if (command.method === "constructor") {
    const { children, ...options } = command.data;
    const tooltip: LTooltip = window.L.tooltip(options);

    // @ts-ignore
    tooltip.__rn_id = command.id;
    tooltip.setContent(children);

    return context.addInstance(command.id, tooltip);
  }

  const tooltip = context.getInstance(command.id) as LTooltip | undefined;

  if (!tooltip) {
    return;
  }

  if (command.method === "openTooltip" || command.method === "closeTooltip") {
    // @ts-expect-error
    return tooltip._source?.[method]?.(command.data);
  }

  if (command.method === "setContent") {
    return tooltip.setContent(command.data);
  }

  if (command.method === "setOpacity") {
    return tooltip.setOpacity(command.data);
  }

  if (command.method === "setLatLng") {
    return tooltip.setLatLng(command.data);
  }

  const tsCheck: never = command;
  return tsCheck;
}
