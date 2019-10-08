export const addCheck = (squares, type, position) => ({
  type: 'ADD_CHECK',
  payload: {
    squares,
    type,
    position
  }
});

export const changeStepNumber = stepNumber => ({
  type: 'CHANGE_STEPNUMBER',
  payload: {
    stepNumber
  }
});

export const setWin = () => ({
  type: 'SETWIN',
  payload: {}
});

export const setXIsNext = () => ({
  type: 'SETISNEXT',
  payload: {}
});

export const sort = isAscending => ({
  type: 'SORT',
  payload: {
    isAscending
  }
});
