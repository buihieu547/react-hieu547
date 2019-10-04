import types from "./types";

const INITIAL_STATE = {
  vocabularyList: ((JSON.parse(localStorage.getItem('state')) || {}).vocabulary || {}).vocabularyList || []
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

    case types.REMOVE_WORD: {
      const ids = new Set(action.ids);
      const { vocabularyList } = state;

      return {
        ...state,
        vocabularyList: vocabularyList.filter(e => !(ids.has(e.id)))
      };
    }

    default:
      return state;
  }
};

export default vocabularyReducer;
