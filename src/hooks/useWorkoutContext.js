import { WorkoutContext } from "../context/workoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "useWorkoutContext must be used inside a WorkoutContextProvider"
    );
  }

  return context;
};
