import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavigateHandler from "./NavigateHandler";
class EmployeeList extends Component {
  constructor(props) {
    super(props);
    // console.log(" ---->  " + props.history.push("/123"));
    this.state = {
      employees: [],
    };
    // this.deleteEmployee = this.deleteEmployee.bind(this);
  }
  deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then((res) => {
      console.log("res   -  " + res);
      alert("Employee details deleted Succcessfully !!!!!!");
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  };
  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        {/* <NavigateHandler component="EmployeeList" /> */}

        <br />

        <div
          className="table table-bordered table-striped "
          style={{ marginTop: "30px" }}
        >
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Mobile</th>
              <th>Mail ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee) => (
              <tr id={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.mobile}</td>
                <td>{employee.mailId}</td>
                <td>
                  <Link to={`/add-employee/${employee.id}`}>
                    <button className="btn btn-info">Update</button>
                  </Link>

                  <Link to={"/employees"}>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteEmployee(employee.id)}
                      style={{ marginLeft: "20px" }}
                    >
                      Delete
                    </button>
                  </Link>
                  <Link to={`/view-employee/${employee.id}`}>
                    <button
                      className="btn btn-info"
                      style={{ marginLeft: "20px" }}
                    >
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
        <br />
        <Link to="/add-employee/_add" className="add-employee-link ">
          <button class="btn btn-primary">Add Employee</button>
        </Link>
        <br />
        <br />
        <br />
      </div>
      // </div>
    );
  }
}

export default EmployeeList;
