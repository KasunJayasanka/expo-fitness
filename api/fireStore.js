import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../firebaseConfig";

// Save User Data
export const saveUserData = async (uid, userData) => {
  try {
    const userDoc = doc(firestore, "users", uid); // Document path: 'users/{uid}'
    await setDoc(userDoc, userData); // Save the user data
  } catch (error) {
    throw error.message; // Forward the error message
  }
};


