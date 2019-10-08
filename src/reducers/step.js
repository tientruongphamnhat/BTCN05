const initialState = true;
const changeStepNumber = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_STEPNUMBER':
      return action.payload.stepNumber;
    default:
      return state;
  }
};

export default changeStepNumber;
