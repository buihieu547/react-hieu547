import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { homeActions } from './duck';
import { vocabularyActions } from '../vocabulary/duck';

const mapStateToProps = state => {
  return { all: state }
};

const mapDispatchToProps = dispatch => {
  const removeWord = (ids) => dispatch(vocabularyActions.removeWord(ids));
  
  return {
    removeWord,
  }
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;