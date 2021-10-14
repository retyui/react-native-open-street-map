import { LatLngLiteral, LatLngTuple, PointTuple } from "leaflet";

export type LatLngExpression = LatLngLiteral | LatLngTuple;
export type PointExpression = PointTuple;

export interface WebCommand {
  id: string;
  type: string;
}
