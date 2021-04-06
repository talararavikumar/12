export const getEmployee = () => (dispatch) => {
  return dispatch({ type: "GET_EMPLOYEE" });
};

export const addEmployee = (data) => (dispatch) => {
  return dispatch({ type: "ADD_EMPLOYEE", payload: data });
};

export const editEmployee = (data) => (dispatch) => {
  return dispatch({ type: "EDIT_EMPLOYEE", payload: data });
};

export const deleteEmployee = (employeeId) => (dispatch) => {
  return dispatch({ type: "DELETE_EMPLOYEE", payload: employeeId });
};
