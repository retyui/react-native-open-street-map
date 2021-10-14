import type { TooltipProps } from "./Tooltip";
import { LatLngExpression } from "../types";

export type TooltipId = string;

export type TooltipCommands =
  | InitTooltipCommand
  | SetOpacityTooltipCommand
  | SetContentTooltipCommand
  | SetLatLngTooltipCommand
  | OpenTooltipCommand
  | CloseTooltipCommand;

export interface InitTooltipCommand {
  method: "constructor";
  data: TooltipProps;
}

export interface SetOpacityTooltipCommand {
  method: "setOpacity";
  data: number;
}

export interface SetContentTooltipCommand {
  method: "setContent";
  data: string;
}

export interface SetLatLngTooltipCommand {
  method: "setLatLng";
  data: LatLngExpression;
}

export interface OpenTooltipCommand {
  method: "openTooltip";
}

export interface CloseTooltipCommand {
  method: "closeTooltip";
}
