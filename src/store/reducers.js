const initialState = {
  name: "ravikumar",
  mail: "ravikumar.nitw@gmail.com"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EMPLOYEE":
      return {
        ...state
      };
    default:
      break;
  }
};
