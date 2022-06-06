import React, { Component } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
// import { withRouter } from "react-router";
import { useState, useEffect } from "react";

const AddEmployee = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     firstName: "",
  //     lastName: "",
  //     mobile: "",
  //     mailId: "",
  //   };
  // we need to bind the method or we can use the arrow functions
  // this.firstNameChangeHandler = this.firstNameChangeHandler.bind(this);
  // this.lastNameChangeHandler = this.lastNameChangeHandler.bind(this);
  // this.mobileChangeHandler = this.mobileChangeHandler.bind(this);
  // this.mailIdChangeHandler = this.mailIdChangeHandler.bind(this);
  //we use arrow function for below bind method
  // this.saveEmployee = this.saveEmployee.bind(this);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [mailId, setMailId] = useState("");

  const navigate = useNavigate();
  const params = useParams();
  let paramsId = params.id;
  console.log("id   -->  " + paramsId);

  const saveOrUpdateEmployee = (e) => {
    //prevent rerendering on button click
    e.preventDefault();
    let employee = {
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
      mailId: mailId,
    };
    paramsId == "_add"
      ? EmployeeService.createEmployee(employee).then((res) => {
          alert("Employee added Successfully !!!");
          navigate("/employees");
        })
      : EmployeeService.updateEmployee(employee, paramsId).then((res) => {
          alert("Employee updated Successfully !!!");
          navigate("/employees");
        });
  };

  const cancelData = () => {
    const text = "Do you want to cancel this Process ?...";
    // if (confirm(text) == true) {
    //   navigate("..");
    // } else {
    //   navigate(".");
    // }
    // this.props.history.push("/employees");
    navigate("..");

    console.log(props);
  };

  const firstNameChangeHandler = (event) => {
    // this.setState({ firstName: event.target.value });
    setFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    // this.setState({ lastName: event.target.value });
    setLastName(event.target.value);
  };
  const mobileChangeHandler = (event) => {
    // this.setState({ mobile: event.target.value });
    setMobile(event.target.value);
  };
  const mailIdChangeHandler = (event) => {
    // this.setState({ mailId: event.target.value });
    setMailId(event.target.value);
  };

  useEffect(() => {
    if (paramsId == "_add") {
      return;
    } else {
      EmployeeService.getEmployeeById(paramsId).then((res) => {
        let employee = res.data;
        console.log("-=->   " + employee);
        setFirstName(employee.firstName);
        setLastName(employee.lastName);
        setMobile(employee.mobile);
        setMailId(employee.mailId);
      });
    }
  }, []);

  return (
    <div className="add-employee">
      <div className="container  row" style={{ marginTop: "30px" }}>
        <div className="col-md-6 offset-md-4 card ">
          <h3 className="text-center">
            {paramsId == "_add"
              ? "ADD EMPLOYEE DETAILS"
              : "UPDATE EMPLOYEE DETAILS"}
          </h3>
          <div className="card-body">
            <form onSubmit="">
              <div className="form-group">
                <label>Enter First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={firstNameChangeHandler}
                ></input>
              </div>
              <div className="form-group">
                <label>Enter Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={lastNameChangeHandler}
                ></input>
              </div>
              <div className="form-group">
                <label>Enter Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile"
                  name="mobile"
                  value={mobile}
                  onChange={mobileChangeHandler}
                ></input>
              </div>
              <div className="form-group">
                <label>Enter Mail Id</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mail Id"
                  name="mailId"
                  value={mailId}
                  onChange={mailIdChangeHandler}
                ></input>
              </div>
              <br />
              <button
                className="btn btn-success"
                onClick={saveOrUpdateEmployee}
              >
                {paramsId == "_add" ? "Save" : "Update"}
              </button>

              {/* <Link to=".."> */}
              <button
                className="btn btn-danger"
                onClick={cancelData}
                style={{ marginLeft: "30px" }}
              >
                Cancel
              </button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
