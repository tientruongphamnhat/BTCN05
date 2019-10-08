import { combineReducers } from 'redux';
import history from './history';
import sort from './sort';
import changeStepNumber from './step';
import win from './win';
import xIsNext from './xIsNext';

export default combineReducers({
  history,
  sort,
  changeStepNumber,
  win,
  xIsNext
});
