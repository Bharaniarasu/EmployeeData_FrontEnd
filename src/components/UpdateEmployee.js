import React, { Component, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateEmployee = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [mailId, setMailId] = useState("");

  // to get the params in the url
  // it returns an object
  const params = useParams();
  let idParams = params.id;

  const [id, setId] = useState(idParams);
  const navigate = useNavigate();

  const updateEmployee = (e) => {
    e.preventDefault();

    let employee = {
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
      mailId: mailId,
    };

    EmployeeService.updateEmployee(employee, id).then((res) => {
      alert("Employee updated Successfully !!!");
      navigate("..");
    });
  };

  const cancelData = () => {
    navigate("..");
  };

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };
  const mobileChangeHandler = (event) => {
    setMobile(event.target.value);
  };
  const mailIdChangeHandler = (event) => {
    setMailId(event.target.value);
  };

  useEffect(() => {
    console.log("-->  " + props);

    EmployeeService.getEmployeeById(id).then((res) => {
      let employee = res.data;
      console.log("-=->   " + employee);
      setFirstName(employee.firstName);
      setLastName(employee.lastName);
      setMobile(employee.mobile);
      setMailId(employee.mailId);
    });
  }, []);
  return (
    <div className="add-employee">
      <div className="container  row">
        <div className="col-md-6 offset-md-4 card ">
          <h3 className="text-center">Update Employee Details</h3>
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
              <button className="btn btn-success" onClick={updateEmployee}>
                Update
              </button>
              {/* <Link to=".."> */}
              <button className="btn btn-danger" onClick={cancelData}>
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

export default UpdateEmployee;
