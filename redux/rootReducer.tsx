import { HYDRATE } from "next-redux-wrapper";
import { CombinedState } from "redux";
import { AnyAction, combineReducers } from "redux";
import { RootState } from "./store";

const rootReducer = (state, action: AnyAction) => {
  switch(action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({})
      return combinedReducer(state, action);
    }
  }
}

export default rootReducer