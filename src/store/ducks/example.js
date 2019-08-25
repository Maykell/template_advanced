/**
 * Example Types
 */
export const exampleTypes = {
  EXAMPLE_REQUEST: 'example/EXAMPLE_REQUEST',
  EXAMPLE_SUCCESS: 'example/EXAMPLE_SUCCESS',
  EXAMPLE_ERROR: 'example/EXAMPLE_ERROR',
};

/**
 * Example Actions
 */
export const exampleActions = {
  example: value => ({
    type: exampleTypes.EXAMPLE_REQUEST,
    payload: value,
  }),
  exampleSuccess: data => ({
    type: exampleTypes.EXAMPLE_SUCCESS,
    payload: data,
  }),
  exampleError: error => ({
    type: exampleTypes.EXAMPLE_ERROR,
    payload: error,
  }),
};

/**
 * Example Reducer
 */
const initialState = {
  data: [],
  loading: false,
  error: '',
};

export const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case exampleTypes.EXAMPLE_REQUEST:
      return { ...state, loading: true };
    case exampleTypes.EXAMPLE_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case exampleTypes.EXAMPLE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
