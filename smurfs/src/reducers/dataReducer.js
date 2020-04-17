const initialValue = {
  inputValue: {
    name: "",
    age: "",
    height: "",
  },
  loading: false,
  data: [],
  error: "",
};

export const dataReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "FETCHING_DATA":
      return {
        ...state,
        loading: true,
      };
    case "NEW_DATA":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_INPUT_VALUE":
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      return state;
  }
};
