const initialState = true;

const xIsNext = (state = initialState, action) => {
  switch (action.type) {
    case 'SETISNEXT':
      return !state;
    default:
      return state;
  }
};

export default xIsNext;
