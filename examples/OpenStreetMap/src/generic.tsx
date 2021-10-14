import React, {
  Component as ReactComponent,
  ComponentType,
  useEffect,
  useRef,
  useState,
} from "react";
import { MapContext } from "./context";
import { toTuple } from "./utils";

export interface InjectProps {
  onUnmount?: (id: string) => void;
  onMount?: (id: string) => void;
}

export function generic<
  TProps,
  TCommands extends { method: string; data?: unknown }
>(options: {
  nullRender?: boolean;
  displayName: string;
  onPropsChange(props: TProps, prevProps: TProps): TCommands[];
}) {
  class Component extends ReactComponent<TProps & InjectProps> {
    static displayName = options.displayName;
    static contextType = MapContext;

    unsubscribe = () => {};
    nestedElements: Record<string, any> = {};
    id: string = `${options.displayName}-${Math.random()
      .toString(36)
      .slice(2)}`;
    mounted: boolean = false;

    componentDidMount() {
      this.mounted = true;

      this.toWebView([
        { method: "constructor" as const, data: this.props } as TCommands,
      ]);
      this.props.onMount?.(this.id);
      this.unsubscribe = this.context.onMessage(this.id, (event: unknown) => {
        // @ts-ignore
        this.props?.[event.type]?.(event?.payload);
      });
    }
    componentWillUnmount() {
      this.mounted = false;
      this.context.onUnmount(this.id);
      this.props.onUnmount?.(this.id);
      this.unsubscribe();
    }

    componentDidUpdate(prevProps: TProps) {
      const commands = options.onPropsChange(this.props, prevProps);

      this.toWebView(commands);
    }

    toWebView(commands: TCommands[]) {
      if (commands.length === 0) {
        return;
      }

      this.context.toWebView(this.id, options.displayName, commands);
    }

    createNestedElementInit(name: string, onUpdate: (newId: string) => void) {
      const getState = () => this.nestedElements[name];

      if (!getState()) {
        this.nestedElements[name] = {
          id: null,
          onUnmount: () => {
            this.nestedElements[name].id = null;
          },
          onMount: (newId: string) => {
            if (getState().id !== newId) {
              onUpdate(newId);
            }

            this.nestedElements[name].id = newId;
          },
        };
      }

      return {
        onUnmount: getState().onUnmount,
        onMount: getState().onMount,
      };
    }

    render() {
      if (options.nullRender) {
        return null;
      }

      return this.props.children || null;
    }
  }

  return Component;
}

export const makeRemountOnPropsChange = <T,>(options: {
  propsDependencies: Array<keyof T>;
  latLngDependencies?: Array<keyof T>;
}) => (Component: ComponentType<T>) => (props: T) => {
  const isMountEffect = useRef(true);
  const [key, setKey] = useState(0);
  const dependencyList = options.propsDependencies
    .map<any>((propName) => props[propName])
    .concat(
      (options.latLngDependencies || []).map((propName) =>
        toTuple(props[propName] || ([] as any)).join(",")
      )
    );

  useEffect(() => {
    if (!isMountEffect.current) {
      setKey((k) => k + 1);
    }

    isMountEffect.current = false;
  }, dependencyList);

  return <Component key={key} {...props} />;
};
