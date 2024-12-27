import { Slot, Stack } from "expo-router";
import React from "react";
import { Provider } from "react-redux"; // Import Redux Provider
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate
import store, { persistor } from "../redux/store"; // Import your Redux store and persistor
import "../global.css"; // Import global CSS for NativeWind

export default function _layout() {
  return (
    <Provider store={store}>
      {/* PersistGate ensures the Redux state is rehydrated before rendering the app */}
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}
