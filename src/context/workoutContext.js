import { createContext, useReducer } from "react";

export const WorkoutContacts = createContext({ workouts: null }/* chatGPT change { workouts: null }*/);

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    default:
      return state;
  }
};

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  });

  return (
    <WorkoutContacts.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContacts.Provider>
  );
};
export default WorkoutContextProvider;
