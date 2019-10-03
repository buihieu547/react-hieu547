import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { homeActions } from './duck';

const mapStateToProps = state => {
  return { all: state }
};

const mapDispatchToProps = dispatch => {
  const onIncrementClick = () => dispatch(homeActions.incrementCount(1));
  
  return {
    onIncrementClick,
  }
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;