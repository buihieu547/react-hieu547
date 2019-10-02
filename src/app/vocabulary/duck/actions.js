import types from "./types.js";

const addNewWord = value => ({
  type: types.ADD_NEW_WORD,
  value: value
});

export default {
  addNewWord
};
