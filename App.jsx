import { LogBox } from "react-native";
import Reanimated from 'react-native-reanimated';

// Disable Reanimated Strict Mode warnings
Reanimated.setStrictMode(false);

// Optionally, ignore specific warnings in React Native's LogBox
LogBox.ignoreLogs([
  "[Reanimated] Reading from `value` during component render."
]);