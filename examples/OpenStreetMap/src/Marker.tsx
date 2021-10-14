import React from "react";
import { generic } from "./generic";
import { isLatLngChange, isPropChange } from "./utils";
import type { LatLngExpression } from "./types";
import type {
  IconCommand,
  InitCommand,
  MarkerCommands,
  PopupCommand,
  TooltipCommand,
} from "./Marker.interface";
import { ParentLayerContext, ParentLayerTypes } from "./ParentLayer.context";

export interface MarkerProps {
  position: LatLngExpression;
  opacity?: number;
  zIndexOffset?: number;
  draggable?: boolean;
  // FIXME
  icon?: any;
}

const MarkerComponent = generic<MarkerProps, MarkerCommands>({
  displayName: "Marker",
  onPropsChange(props, prevProps) {
    const commands: MarkerCommands[] = [];

    if (props.icon == null && prevProps.icon != null) {
      commands.push({ method: "setIcon", data: null } as IconCommand);
    }

    if (isLatLngChange(props.position, prevProps.position)) {
      commands.push({ method: "setLatLng", data: props.position });
    }

    if (isPropChange("opacity", props, prevProps)) {
      commands.push({ method: "setOpacity", data: props.opacity as number });
    }

    if (isPropChange("draggable", props, prevProps)) {
      if (props.draggable) {
        commands.push({
          method: "enable",
          scope: "dragging",
        });
      } else {
        commands.push({
          method: "disable",
          scope: "dragging",
        });
      }
    }

    if (isPropChange("zIndexOffset", props, prevProps)) {
      commands.push({
        method: "setZIndexOffset",
        data: props.opacity as number,
      });
    }

    return commands;
  },
});

export class Marker extends MarkerComponent {
  iconId?: string;
  tooltipId?: string;
  popupId?: string;

  componentDidMount() {
    this.mounted = true;

    const { icon, children, ...rest } = this.props;
    const initCommand: InitCommand = {
      method: "constructor",
      data: {
        ...rest,
        iconId: this.iconId,
        tooltipId: this.tooltipId,
        popupId: this.popupId,
      },
    };
    this.toWebView([initCommand]);
    this.props.onMount?.(this.id);
  }

  setNewIcon = (newIconId: string) => {
    this.iconId = newIconId;

    if (this.mounted) {
      this.toWebView([{ method: "setIcon", data: newIconId } as IconCommand]);
    }
  };

  setNewTooltip = (newTooltipId: string) => {
    this.tooltipId = newTooltipId;

    if (this.mounted) {
      this.toWebView([
        { method: "setTooltip", data: newTooltipId } as TooltipCommand,
      ]);
    }
  };

  setNewPopup = (newPopupId: string) => {
    this.popupId = newPopupId;

    if (this.mounted) {
      this.toWebView([
        { method: "setPopup", data: newPopupId } as PopupCommand,
      ]);
    }
  };

  contextValue = {
    onMount: (id: string, type: ParentLayerTypes) => {
      if (type === "icon") {
        return this.setNewIcon(id);
      }
      if (type === "tooltip") {
        return this.setNewTooltip(id);
      }
      if (type === "popup") {
        return this.setNewPopup(id);
      }
    },
    unUnmount: () => {},
  };

  render() {
    const { icon, children } = this.props;

    return (
      <ParentLayerContext.Provider value={this.contextValue}>
        {icon}
        {children}
      </ParentLayerContext.Provider>
    );
  }
}
