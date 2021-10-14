import type { Marker } from "leaflet";
import type { LatLngExpression } from "./types";
import type { IconId } from "./Icon.interface";
import type { PopupId } from "./Popup.interface";
import type { TooltipId } from "./Tooltip/Tooltip.types";



export type MarkerCommands =
  | InitCommand
  | IconCommand
  | TooltipCommand
  | PopupCommand
  | OpacityCommand
  | LatLngCommand
  | EnableDraggingCommand
  | DisableDraggingCommand
  | SetZIndexOffsetCommand;

export interface InitCommand {
  method: "constructor";
  data: {
    position: LatLngExpression;
    iconId?: IconId;
    popupId?: PopupId;
    tooltipId?: TooltipId;
    opacity?: OpacityCommand["data"];
    latLng?: LatLngCommand["data"];
    draggable?: boolean;
    zIndexOffset?: SetZIndexOffsetCommand["data"];
    title?: string;
    alt?: string;
  };
}

export interface SetZIndexOffsetCommand {
  method: "setZIndexOffset";
  data: Parameters<Marker["setZIndexOffset"]>[0];
}

export interface IconCommand {
  method: "setIcon";
  data: IconId | null;
}
export interface TooltipCommand {
  method: "setTooltip";
  data: TooltipId;
}
export interface PopupCommand {
  method: "setPopup";
  data: PopupId;
}

export interface OpacityCommand {
  method: "setOpacity";
  data: Parameters<Marker["setOpacity"]>[0];
}

export interface LatLngCommand {
  method: "setLatLng";
  data: Parameters<Marker["setLatLng"]>[0];
}

export interface EnableDraggingCommand {
  method: "enable";
  scope: "dragging";
}

export interface DisableDraggingCommand {
  method: "disable";
  scope: "dragging";
}
