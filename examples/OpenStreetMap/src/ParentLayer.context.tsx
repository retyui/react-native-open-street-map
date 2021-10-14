import React, { ComponentType, createContext, useContext } from "react";

import type { InjectProps } from "./generic";

export type ParentLayerTypes = "icon" | "tooltip" | "popup";

export const ParentLayerContext = createContext({
  onMount(id: string, type: ParentLayerTypes) {},
  unUnmount(id: string, type: ParentLayerTypes) {},
});

export const useMarkerContext = () => useContext(ParentLayerContext);

export const withParentLayerContext = (type: ParentLayerTypes) => <T,>(
  Component: ComponentType<T & InjectProps>
) => {
  function WithParentLayerContext(props: Omit<T, keyof InjectProps>) {
    const { onMount, unUnmount } = useMarkerContext();

    return (
      <Component
        {...(props as T)}
        onUnmount={(id) => unUnmount(id, type)}
        onMount={(id) => onMount(id, type)}
      />
    );
  }

  return WithParentLayerContext;
};
