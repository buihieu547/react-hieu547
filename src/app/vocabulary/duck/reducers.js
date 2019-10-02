import types from "./types";

const INITIAL_STATE = {};

const vocabularyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNT: {
      const { value } = action;
      const { count } = state;
      return {
        ...state,
        count: count + value
      };
    }

    default:
      return state;
  }
};

export default vocabularyReducer;
