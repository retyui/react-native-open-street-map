import type { MarkerCommands } from "./Marker.interface";
import type {
  Icon as LIcon,
  Marker as LMarker,
  Tooltip as LTooltip,
  Popup as LPopup,
} from "leaflet";
import type { WebCommand } from "./types";
import type { CustomWindow, WebMapContext } from "./types.webview";

declare const window: CustomWindow;

export function Marker(
  command: MarkerCommands & WebCommand,
  context: WebMapContext
) {
  function setTooltip(instance: LMarker, tooltipId?: string) {
    const tooltip = context.getInstance<LTooltip>(tooltipId);

    if (tooltip) {
      instance.unbindTooltip().bindTooltip(tooltip);
    }
  }

  function setPopup(instance: LMarker, popupId?: string) {
    const popup = context.getInstance<LPopup>(popupId);

    if (popup) {
      instance.unbindPopup().bindPopup(popup);
    }
  }

  function setIcon(instance: LMarker, iconId?: string | null) {
    const icon = context.getInstance(iconId) as LIcon | undefined;
    instance.setIcon(icon || new window.L.Icon.Default());
  }

  //------------------------------------------------------------

  if (command.method === "constructor") {
    const {
      position,
      iconId,
      popupId,
      tooltipId,
      draggable,
      ...options
    } = command.data;
    const instance: LMarker = window.L.marker(position, options);

    // @ts-ignore
    instance.__rn_id = command.id;
    context.addInstance(command.id, instance);

    setIcon(instance, iconId);
    setTooltip(instance, tooltipId);
    setPopup(instance, popupId);

    if (draggable) {
      instance.dragging?.enable();
    }

    return instance.addTo(context.map);
  }

  const instance = context.getInstance<LMarker>(command.id);

  if (!instance) {
    return;
  }

  if (command.method === "setIcon") {
    return setIcon(instance, command.data);
  }

  if (command.method === "setTooltip") {
    return setTooltip(instance, command.data);
  }

  if (command.method === "setPopup") {
    return setPopup(instance, command.data);
  }

  // @ts-ignore
  const { method, data } = command;

  if ("scope" in command) {
    // @ts-ignore
    return instance[command.scope][method](data);
  }

  // @ts-ignore
  return instance[method](data);
}
