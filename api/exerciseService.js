import { db } from "../firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

// Save selected exercises to Firestore
export const saveSelectedExercises = async (userId, selectedExercises) => {
    try {
      // Ensure selectedExercises is an array
      if (!Array.isArray(selectedExercises)) {
        console.error("selectedExercises is not an array:", selectedExercises);
        return; // Exit if validation fails
      }
  
      // Save data to Firestore
      await setDoc(doc(db, "selectedExercises", userId), { exercises: selectedExercises });
      console.log("Exercises saved to Firestore successfully");
    } catch (error) {
      console.error("Error saving exercises to Firestore:", error);
    }
  };
  

// Fetch selected exercises from Firestore
export const fetchSelectedExercises = async (userId) => {
  try {
    const docRef = doc(db, "selectedExercises", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().exercises || [];
    }
    return [];
  } catch (error) {
    console.error("Error fetching exercises from Firestore:", error);
    return [];
  }
};
