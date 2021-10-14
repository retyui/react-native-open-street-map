import React, { FC, useRef, useState } from "react";
import { WebView, WebViewProps } from "react-native-webview";
import { MapContext } from "./context";
import { WebViewMessageEvent } from "react-native-webview/lib/WebViewTypes";
import allWebviewHandler from "./allWebview";

const originWhitelist = ["*"];

const html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>react-native-open-street-map</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />
    <style>html,body,#root_id{height:100%}</style>
</head>
<body>
    <div id="root_id"></div>
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
    <script>${allWebviewHandler}</script>
</body>
</html>`;

export interface MapContainerProps {
  style: WebViewProps["containerStyle"];
  center: [number, number];
  zoom?: number;
}

const runCommand = (msg: object) => {
  try {
    return `(function(){  window.__runCommand('${JSON.stringify(msg)}');  })()`;
  } catch (error) {
    console.log(" --- xdebug ", { error, msg });
    return "";
  }
};

export const MapContainer: FC<MapContainerProps> = ({
  style,
  center,
  zoom = 13,
  children,
}) => {
  const [flag, setFlag] = useState(false);
  const webViewRef = useRef<WebView>(null);
  const listenersRef = useRef<Record<string, (event: unknown) => void>>({});
  const contextRef = useRef({
    onMessage: (id: string, cb: (event: unknown) => void) => {
      listenersRef.current[id] = cb;

      return () => {
        delete listenersRef.current[id];
      };
    },
    onUnmount: (id: string) => {
      webViewRef.current?.injectJavaScript(runCommand({ id, type: "Unmount" }));
    },
    toWebView: (id: string, displayName: string, commands: any[]) => {
      const jsCode = commands
        .map((command) => runCommand({ id, type: displayName, ...command }))
        .join(";");

      webViewRef.current?.injectJavaScript(jsCode);
    },
  });

  const onMessage = (event: WebViewMessageEvent) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);

      if (data?.type === "init") {
        setFlag(true);
      } else {
        listenersRef.current[data.id]?.(data)

        console.log(
          " --- xdebug ",
          data?.payload?.method || data?.type || "",
          data?.payload || data
        );
      }
    } catch (e) {
      console.log(" --- error", e);
    }
  };

  return (
    <MapContext.Provider value={contextRef.current}>
      <WebView
        ref={webViewRef}
        containerStyle={style}
        onMessage={onMessage}
        source={{
          html: html
            .replace("123,321", center.toString())
            .replace("-111", zoom.toString()),
        }}
        originWhitelist={originWhitelist}
      />
      {flag ? children : null}
    </MapContext.Provider>
  );
};
