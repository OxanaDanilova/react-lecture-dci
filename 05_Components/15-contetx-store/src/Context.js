import { createContext, useReducer } from "react";

export const Context = createContext();

const initState = {
  savedRecipes: [],
  chef: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_RECIPE":
      state = {
        ...state,
        savedRecipes: [...state.savedRecipes, action.payload],
      };
      return state;
    case "REMOVE_RECIPE":
      const savedRecipes = state.savedRecipes.filter(
        (r) => r != action.payload
      );
      console.log(savedRecipes);
      state = {
        ...state,
        savedRecipes,
      };
      return state;
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const saveRecipe = (recipeId) => {
    if (!state.savedRecipes.includes(recipeId)) {
      dispatch({ type: "SAVE_RECIPE", payload: recipeId });
    } else {
      dispatch({ type: "REMOVE_RECIPE", payload: recipeId });
    }
  };

  return (
    <Context.Provider value={{ state, saveRecipe }}>
      {children}
    </Context.Provider>
  );
};
