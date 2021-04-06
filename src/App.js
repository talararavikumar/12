import { useSelector } from "react-redux";
import "./styles.css";
import React, { useEffect } from "react";

export default function App() {
  const employees = useSelector((state) => state.employees);
  return (
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
                  <button onClick={() => this.editDetails(data)}>EDIT</button>{" "}
                  <button onClick={() => this.deleteEmployee(data.id)}>
                    DELETE
                  </button>{" "}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
