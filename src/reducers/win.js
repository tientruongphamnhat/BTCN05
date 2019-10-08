const initialState = null;
const win = (state = initialState, action) => {
  switch (action.type) {
    case 'SETWIN':
      return !state;
    default:
      return state;
  }
};

export default win;
