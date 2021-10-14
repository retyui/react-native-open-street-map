import React, { useState } from "react";
import { Button, SafeAreaView } from "react-native";
import { MapContainer } from "./src/index";
import { Marker } from "./src/Marker";
import { Tooltip } from "./src/Tooltip/Tooltip";
import { RedIcon, GreenIcon, OrangeIcon } from "./src/tmp/RedIcon";

const position = [51.505, -0.09];

const App = () => {
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  const [permanent, setPermanent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState("test content");

  return (
    <SafeAreaView style={{ flex: 1, borderWidth: 2, borderColor: "blue" }}>
      <Button title="toggle icon" onPress={() => setState((f) => !f)} />
      <Button title="toggle opacity" onPress={() => setState2((f) => !f)} />
      <Button
        title="toggle permanent"
        onPress={() => setPermanent((f) => !f)}
      />
      <Button
        title="toggle isVisible"
        onPress={() => setIsVisible((f) => !f)}
      />
      <Button
        title="toggle content"
        onPress={() =>
          setContent(() => `test content ${Math.random().toString(36)}`)
        }
      />
      <MapContainer
        center={position}
        zoom={13}
        style={{
          marginTop: "auto",
          marginBottom: "auto",
          flex: 0.5,
          // flex: 1,
          borderWidth: 1,
          borderColor: "red",
        }}
      >
        <Marker
          draggable
          position={position}
          opacity={state2 ? 0.5 : 1}
          icon={
            state ? (
              Math.random() > 0.5 ? (
                <RedIcon />
              ) : Math.random() < 0.5 ? (
                <GreenIcon />
              ) : (
                <OrangeIcon />
              )
            ) : null
          }
        >
          <Tooltip permanent={permanent} isVisible={isVisible}>
            {content}
          </Tooltip>
        </Marker>
      </MapContainer>
    </SafeAreaView>
  );
};

export default App;
