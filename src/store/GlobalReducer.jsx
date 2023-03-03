import { Actions } from "./GlobalActions";

const GlobalReducer = (state, action) => {

  switch(action.type) 
  {
    case Actions.SET_MESSAGE:
        return {
            ...state,
            messages : [
                ...state.messages, action.payload
            ]
        };
    default:
        return {
            ...state
        };
  };

}

export default GlobalReducer