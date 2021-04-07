const initialState = {
  employees: [
    { id: 1, employeeName: "Employee 1", employeeDepartment: ".NET Team" },
    { id: 2, employeeName: "Employee 2", employeeDepartment: "Mobile Team" },
    { id: 3, employeeName: "Employee 3", employeeDepartment: "Design Team" }
  ]
};

export const empReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EMPLOYEE":
      return {
        ...state
      };
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload]
      };
    case "EDIT_EMPLOYEE": {
      const employees = state.employees.map((emp) => {
        if (emp.id === action.payload.id) return action.payload;
        else return emp;
      });

      return {
        ...state,
        employees: employees
      };
    }
    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter((emp) => emp.id !== action.payload)
      };
    default:
      return state;
  }
};
