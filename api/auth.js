import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setSelectedExercises } from "../redux/slices/exerciseSlice";
import { persistor } from "../redux/store";

// Helper to store user data in AsyncStorage
const saveUserToStorage = async (user) => {
    try {
        console.log("Saving user with id to AsyncStorage:", user);
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

        // Fetch user data from Firestore
        const userDocRef = doc(firestore, "users", userId);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            const { firstName, lastName } = userDoc.data();

            // Initialize Redux state with an empty list (no Firestore fetching for exercises)
            dispatch(setSelectedExercises([]));

            // Create user object and save it to AsyncStorage
            const userData = {
                id: userId,
                email,
                firstName: firstName || "",
                lastName: lastName || "",
            };
            await saveUserToStorage(userData);

            console.log("User saved to AsyncStorage:", userData);

            return userData;
        } else {
            throw new Error("User data not found in Firestore");
        }
    } catch (error) {
        console.error("Error during login:", error);
        throw new Error(error.message);
    }
};

// Sign Up
export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user; // Return the created user
    } catch (error) {
        throw error.message; // Forward the error message
    }
};

// Logout
export const logout = async (dispatch) => {
    try {
        // Clear user data from AsyncStorage
        await AsyncStorage.removeItem("user");

        // Clear Redux state
        dispatch(setSelectedExercises([]));

        // Clear persisted Redux state
        await persistor.purge();

        console.log("Logout successful, Redux state cleared");
    } catch (error) {
        console.error("Error during logout:", error);
    }
};
