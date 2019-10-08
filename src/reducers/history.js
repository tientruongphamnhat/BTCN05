const initialState = [
  {
    squares: Array(400).fill(null),
    type: null,
    location: -1
  }
];
const history = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHECK':
      return [
        ...state,
        {
          squares: action.payload.squares,
          type: action.payload.type,
          pos: action.payload.position
        }
      ];
    default:
      return state;
  }
};

export default history;
