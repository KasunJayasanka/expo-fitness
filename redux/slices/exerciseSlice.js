import { createSlice } from "@reduxjs/toolkit";

const exerciseSlice = createSlice({
  name: "exercise",
  initialState: {
    selectedExercises: [],
  },
  reducers: {
    addExercise(state, action) {
      if (!Array.isArray(state.selectedExercises)) {
        state.selectedExercises = []; // Initialize if undefined
      }

      const exercise = action.payload;
      if (!state.selectedExercises.find((ex) => ex.id === exercise.id)) {
        state.selectedExercises.push(exercise);
      }
    },
    removeExercise(state, action) {
      state.selectedExercises = state.selectedExercises.filter(
        (exercise) => exercise.id !== action.payload.id
      );
    },
    setSelectedExercises(state, action) {
      state.selectedExercises = Array.isArray(action.payload)
        ? action.payload
        : [];
    },
  },
});

export const { addExercise, removeExercise, setSelectedExercises } =
  exerciseSlice.actions;
export default exerciseSlice.reducer;
