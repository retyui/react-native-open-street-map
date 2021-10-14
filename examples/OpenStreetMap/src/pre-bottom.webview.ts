import { CustomWindow } from "./types.webview";

declare const window: CustomWindow;

window.__context = {
  elements: {},
  map: window.__map,
  getInstance(id?: string | null): undefined {
    if (id) {
      return window.__context.elements[id] as any;
    }
    return undefined;
  },
  addInstance(id: string, instance: unknown) {
    window.__context.elements[id] = instance;
  },
  removeInstance(id: string) {
    delete window.__context.elements[id];
  },
};

window.__runCommand = (rawCommand: string) => {
  try {
    const command = JSON.parse(rawCommand);

    const handler = window.allCommandHandler[command.type];

    if (handler) {
      window.toMobileNative({ type: "debug", payload: command });
      handler(command, window.__context);
    } else {
      window.toMobileNative({
        type: "warning",
        payload: `Cannot find handler for command.type:"${command.type}"`,
      });
    }
  } catch (error) {
    console.log("__runCommand", error);

    window.toMobileNative({
      type: "error",
      payload: {
        // @ts-ignore
        message: error.message,
      },
    });
  }
};

window.toMobileNative({ type: "init" });
