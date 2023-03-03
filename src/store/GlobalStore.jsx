import { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

const initialState = {
    messages: []
};

export const AppContext = createContext(initialState);

const GlobalStore = ({ children }) => {
  
  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  
  return (
    <AppContext.Provider value={[state, dispatch]}>
        { children }
    </AppContext.Provider>
  )
}

export default GlobalStore;