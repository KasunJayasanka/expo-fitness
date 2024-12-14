import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack } from "expo-router";

// Import your global CSS file for NativeWind
import "../global.css";

export default function _layout() {
  return (
    <Stack
        screenOptions={{  
            headerShown: false,
         }}
    >
         <Stack.Screen name="exercises" options={{
            presentation: 'fullScreenModal',
         }} />
    </Stack>
  )
}




