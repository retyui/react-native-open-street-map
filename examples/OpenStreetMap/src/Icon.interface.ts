import type { IconOptions } from "leaflet";

export type IconId = string;

export type IconCommand = InitCommand;

export interface InitCommand {
  method: "constructor";
  data: IconOptions;
}
