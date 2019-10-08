import { connect } from 'react-redux';
import Game from '../components/Game';

import {
  addCheck,
  changeStepNumber,
  setXIsNext,
  setWin,
  sort
} from '../actions';

const mapStateToProps = state => ({
  history: state.history,
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext,
  win: state.win,
  isAscending: state.isAscending
});

const mapDispatchToProps = dispatch => ({
  addCheck: (squares, type, position) =>
    dispatch(addCheck(squares, type, position)),
  changeStepNumber: stepNumber => dispatch(changeStepNumber(stepNumber)),
  setWin: () => dispatch(setWin),
  sort: () => dispatch(sort),
  setXIsNext: () => dispatch(setXIsNext)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
