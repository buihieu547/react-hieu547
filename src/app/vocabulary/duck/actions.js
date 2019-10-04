import types from "./types.js";

const addNewWord = value => ({
  type: types.ADD_NEW_WORD,
  value: value
});

const removeWord = ids => ({
  type: types.REMOVE_WORD,
  ids: ids
});

export default {
  addNewWord,
  removeWord
};
