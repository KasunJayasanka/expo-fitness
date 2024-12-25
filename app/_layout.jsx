import { Slot, Stack } from "expo-router";
import React from "react";
import { Provider } from "react-redux"; // Import Redux Provider
import store from "../redux/store"; // Import your Redux store
import "../global.css"; // Import global CSS for NativeWind

export default function _layout() {
  return (
    <Provider store={store}>
      {/* Wrap the Redux Provider around the entire navigation structure */}
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="exercises"
          options={{
            presentation: "fullScreenModal",
          }}
        />

        <Stack.Screen
          name="exerciseDetails"
          options={{
            presentation: "modal",
          }}
        />
      </Stack>
    </Provider>
  );
}
