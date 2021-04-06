const initialState = {
  employees: [
    { id: 1, employeeName: "Employee 1", employeeDepartment: ".NET Team" },
    { id: 2, employeeName: "Employee 2", employeeDepartment: "Mobile Team" },
    { id: 3, employeeName: "Employee 3", employeeDepartment: "Design Team" }
  ]
};

const empReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default empReducer;
