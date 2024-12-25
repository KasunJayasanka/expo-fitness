import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchSelectedExercises } from "../api/exerciseService";
import { setSelectedExercises } from "../redux/slices/exerciseSlice";
import { useDispatch } from "react-redux";


// Helper to store user data in AsyncStorage
const saveUserToStorage = async (user) => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.error("Error saving user data to AsyncStorage:", error);
  }
};

// Helper to retrieve user data from AsyncStorage
export const getUserFromStorage = async () => {
  try {
    const user = await AsyncStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Error retrieving user data from AsyncStorage:", error);
    return null;
  }
};

// Login function
export const login = async (email, password, dispatch) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;
  
      // Fetch user exercises from Firestore
      const exercises = await fetchSelectedExercises(userId);
  
      // Save exercises to Redux store
      dispatch(setSelectedExercises(exercises));
  
      // Fetch and save user details
      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        await saveUserToStorage(userData); // Save to AsyncStorage
        return userData;
      } else {
        throw new Error("User not found in Firestore");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  
// Sign Up
export const signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user; // Return the created user
    } catch (error) {
      throw error.message; // Forward the error message
    }
  };
  
  export const logout = async (dispatch) => {
    try {
      // Clear user data from AsyncStorage
      await AsyncStorage.removeItem("user");
  
      // Clear Redux store
      dispatch(setSelectedExercises([]));
      console.log("Logout successful");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };