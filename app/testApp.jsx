import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Redux: User Slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: null,
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.firstName = action.payload.firstName;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.firstName = null;
      state.isLoggedIn = false;
    },
  },
});

const { login, logout } = userSlice.actions;

// Redux: Store
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

// LogoutCard Component
const LogoutCard = ({ onLogout }) => (
  <View style={styles.logoutContainer}>
    <Text style={styles.message}>Are you sure you want to log out?</Text>
    <TouchableOpacity onPress={onLogout} style={styles.logoutButton}>
      <Text style={styles.logoutButtonText}>Log Out</Text>
    </TouchableOpacity>
  </View>
);

// Login Component
const Login = () => {
  const [firstName, setFirstName] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (firstName.trim()) {
      dispatch(login({ firstName }));
    }
  };

  return (
    <View style={styles.loginContainer}>
      <TextInput
        placeholder="Enter your name"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

// Main App
const TestApp = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      {user.isLoggedIn ? (
        <LogoutCard onLogout={handleLogout} />
      ) : (
        <Login />
      )}
    </View>
  );
};

// App Entry Point
const App = () => (
  <Provider store={store}>
    <TestApp />
  </Provider>
);

export default App;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  loginContainer: {
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "80%",
    marginBottom: 20,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  logoutContainer: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: "#f44336",
    padding: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
