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