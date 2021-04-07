import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import React, { useEffect, useState } from "react";
import { deleteEmployee, editEmployee, addEmployee } from "./store/actions";

export default function App() {
  const [currentEmployee, setCurrentEmployeeState] = useState({
    id: 0,
    employeeName: "",
    employeeDepartment: ""
  });
  const employeesStore = useSelector((state) => state.employees);
  const { employees } = employeesStore;
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setCurrentEmployeeState({
      ...currentEmployee,
      employeeName: e.target.value
    });
  };

  const handleDepartmentChange = (e) => {
    setCurrentEmployeeState({
      ...currentEmployee,
      employeeDepartment: e.target.value
    });
  };

  function Clear() {
    alert("hi");
  }
  const upDateEmployee = () => {
    if (currentEmployee.id === 0)
      dispatch(
        addEmployee({
          ...currentEmployee,
          id: Math.floor(Math.random() * (999 - 100 + 1) + 100)
        })
      );
    else dispatch(editEmployee({ ...currentEmployee }));
  };
  return (
    <div>
      <div>employeeName: {currentEmployee.employeeName}</div>
      <div>employeeDepartmanet: {currentEmployee.employeeDepartment}</div>
      <div>
        Employee Name :
        <input
          onChange={handleNameChange}
          value={currentEmployee.employeeName}
          type="text"
          placeholder="Employee Name"
        />
        <br />
        Employee Department :
        <input
          onChange={handleDepartmentChange}
          value={currentEmployee.employeeDepartment}
          type="text"
          placeholder="Employee Name"
        />
        <br />
        {currentEmployee.id ? (
          <button onClick={upDateEmployee}>Upate</button>
        ) : (
          <button onClick={upDateEmployee}>Add</button>
        )}
        <button onClick={() => Clear}>Clear</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Depatment Name</th>
            <th>Action(s)</th>
          </tr>
        </thead>
        <tbody>
          {employees &&
            employees.map((data, index) => {
              return (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{data.employeeName}</td>
                  <td>{data.employeeDepartment}</td>
                  <td>
                    <button
                      onClick={() => {
                        setCurrentEmployeeState(data);
                      }}
                    >
                      EDIT
                    </button>
                    <button onClick={() => dispatch(deleteEmployee(data.id))}>
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
