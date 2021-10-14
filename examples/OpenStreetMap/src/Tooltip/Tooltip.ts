import type { Direction } from "leaflet";
import type { TooltipCommands } from "./Tooltip.types";
import type { LatLngExpression, PointExpression } from "../types";
import { generic, InjectProps, makeRemountOnPropsChange } from "../generic";
import { withParentLayerContext } from "../ParentLayer.context";
import { isPropChange } from "../utils";

export interface TooltipProps extends InjectProps {
  // reactive
  children: string;
  opacity?: number;
  isVisible?: boolean | undefined;
  position?: LatLngExpression;
  // change on mount
  permanent?: boolean | undefined;
  direction?: Direction | undefined;
  offset?: PointExpression | undefined;
  sticky?: boolean | undefined;
  pane?: string | undefined;
  interactive?: boolean | undefined;
  className?: string;
  attribution?: string;
  //events
  onTooltipOpen: (e: {}) => void;
  onTooltipClose: (e: {}) => void;
}

export const Tooltip = withParentLayerContext("tooltip")(
  makeRemountOnPropsChange<TooltipProps>({
    propsDependencies: [
      "permanent",
      "direction",
      "sticky",
      "pane",
      "interactive",
      "className",
      "attribution",
    ],
    latLngDependencies: ["offset"],
  })(
    generic<TooltipProps, TooltipCommands>({
      nullRender: true,
      displayName: "Tooltip",
      onPropsChange(props, prevProps) {
        const commands: TooltipCommands[] = [];

        if (isPropChange("children", props, prevProps)) {
          commands.push({
            method: "setContent",
            data: props.children,
          });
        }

        if (isPropChange("opacity", props, prevProps)) {
          commands.push({
            method: "setOpacity",
            data: props.opacity as number,
          });
        }

        if (isPropChange("position", props, prevProps)) {
          commands.push({
            method: "setLatLng",
            data: props.position as LatLngExpression,
          });
        }

        if (isPropChange("isVisible", props, prevProps)) {
          if (props.isVisible) {
            commands.push({ method: "openTooltip" });
          } else {
            commands.push({ method: "closeTooltip" });
          }
        }

        return commands;
      },
    })
  )
);
