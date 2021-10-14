import React from "react";
import { PointExpression } from "./types";
import { generic, InjectProps, makeRemountOnPropsChange } from "./generic";
import { IconCommand } from "./Icon.interface";
import { withParentLayerContext } from "./ParentLayer.context";

interface PointExpressionProps {
  iconSize?: PointExpression;
  iconAnchor?: PointExpression;
  popupAnchor?: PointExpression;
  tooltipAnchor?: PointExpression;
  shadowSize?: PointExpression;
  shadowAnchor?: PointExpression;
}

interface LiteralProps {
  iconUrl: string;
  iconRetinaUrl?: string;
  shadowUrl?: string;
  shadowRetinaUrl?: string;
  className?: string;
}

export interface IconProps
  extends InjectProps,
    LiteralProps,
    PointExpressionProps {
  //
}

const complexProps: Array<keyof PointExpressionProps> = [
  "iconSize",
  "iconAnchor",
  "popupAnchor",
  "tooltipAnchor",
  "shadowSize",
  "shadowAnchor",
];

const simpleProps: Array<keyof LiteralProps> = [
  "iconUrl",
  "iconRetinaUrl",
  "shadowUrl",
  "shadowRetinaUrl",
  "className",
];

export const Icon = withParentLayerContext("icon")(
  makeRemountOnPropsChange<IconProps>({
    latLngDependencies: complexProps,
    propsDependencies: simpleProps,
  })(
    generic<IconProps, IconCommand>({
      nullRender: true,
      displayName: "Icon",
      onPropsChange() {
        return [];
      },
    })
  )
);
