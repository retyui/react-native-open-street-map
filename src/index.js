import React from "react";
import { WebView } from "react-native-webview";

const leafletVersion = "1.7.1";
const originWhitelist = ["*"];
const source = {
  html: `<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@${leafletVersion}/dist/leaflet.css" />
    <title>react-native-open-street-map</title>
</head>
<body>
    <script src="https://unpkg.com/leaflet@${leafletVersion}/dist/leaflet.js"></script>
</body>
</html>`,
};

export const MapContainer = () => {
  return <WebView source={source} originWhitelist={originWhitelist} />;
};
