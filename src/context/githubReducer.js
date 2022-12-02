const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
        unauthorized: false,
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
        unauthorized: false,
      };
    case 'UNAUTHENTICATED_TOKEN':
      return {
        ...state,
        unauthorized: true,
        loading: false,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
        loading: false,
        unauthorized: false,
      };

    default:
      return state;
  }
};

export default githubReducer;
