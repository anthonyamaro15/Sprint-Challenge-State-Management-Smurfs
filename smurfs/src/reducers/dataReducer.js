const initialValue = {
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
    case "FETCHING_NEW_DATA":
      return {
        ...state,
        loading: true,
      };

    case "ADDED_DATA":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    //////////
    case "REMOVING":
      return {
        ...state,
        loading: true,
      };
    case "REMOVED_SMURF":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "ERROR_REMOVING":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
