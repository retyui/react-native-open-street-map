import type { LatLngExpression, PointExpression } from "./types";
import { PointTuple } from "leaflet";

export const toTuple = (
  latLng: LatLngExpression | PointExpression
): PointTuple => (Array.isArray(latLng) ? latLng : [latLng.lat, latLng.lng]);

export const isLatLngChange = (
  latLng?: LatLngExpression | PointExpression,
  prevLatLng?: LatLngExpression | PointExpression
) => {
  if (latLng && prevLatLng) {
    const [lat, lng] = toTuple(latLng);
    const [prevLat, prevLng] = toTuple(prevLatLng);

    if (lat !== prevLat) {
      return true;
    }

    return lng !== prevLng;
  }

  // undefined => [x,y]
  return prevLatLng == null && latLng != null;
};

export const isPropChange = <TProps, TKey extends keyof TProps>(
  name: TKey,
  props: TProps,
  prevProps: TProps
): boolean => props[name] != null && props[name] !== prevProps[name];
