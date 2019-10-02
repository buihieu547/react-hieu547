import { connect } from 'react-redux';
import AddWordComponent from './AddWordComponent';
import { vocabularyActions } from './duck';

const mapStateToProps = state => {
  return { vocabulary: state.vocabulary }
};

const mapDispatchToProps = dispatch => {
  const onAddNewWord = (data) => dispatch(vocabularyActions.addNewWord(data));
  
  return {
    onAddNewWord,
  }
};

const AddWordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddWordComponent);

export default AddWordContainer;