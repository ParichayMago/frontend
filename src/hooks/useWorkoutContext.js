import { WorkoutContacts } from "../context/workoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContacts);

  if (!context) {
    throw new Error(
      "useWorkoutContext must be used inside a WorkoutContextProvider"
    );
  }

  return context;
};
