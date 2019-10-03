import types from "./types";

const INITIAL_STATE = {
  vocabularyList: []
};

const vocabularyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_NEW_WORD: {
      const { value } = action;
      const { vocabularyList } = state;
      value.id = (new Date().getTime());
      vocabularyList.push(value);

      return {
        ...state,
        vocabularyList: vocabularyList
      };
    }

    default:
      return state;
  }
};

export default vocabularyReducer;
