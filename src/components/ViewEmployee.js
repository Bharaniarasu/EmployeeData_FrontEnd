import React, { Component, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const ViewEmployee = () => {
  const paramsId = useParams().id;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [mailId, setMailId] = useState("");

  useEffect(() => {
    EmployeeService.getEmployeeById(paramsId).then((res) => {
      let employee = res.data;
      setFirstName(employee.firstName);
      setLastName(employee.lastName);
      setMobile(employee.mobile);
      setMailId(employee.mailId);
    });
  }, []);
  return (
    <div>
      <div className="card col-md-6 offset-md-3" style={{ marginTop: "50px" }}>
        <div className="card-body">
          <div className="row">
            <div className="col-md-5 offset-md-1">
              <h4>First Name</h4>{" "}
            </div>
            <div className="col-md-5 offset-md-1">
              <h4> {firstName}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 offset-md-1">
              <h4>Last Name</h4>{" "}
            </div>
            <div className="col-md-5 offset-md-1">
              <h4> {lastName}</h4>
            </div>
          </div>{" "}
          <div className="row">
            <div className="col-md-5 offset-md-1">
              <h4>Mobile</h4>{" "}
            </div>
            <div className="col-md-5 offset-md-1">
              <h4> {mobile}</h4>
            </div>
          </div>{" "}
          <div className="row">
            <div className="col-md-5 offset-md-1">
              <h4>Mail ID</h4>{" "}
            </div>
            <div className="col-md-5 offset-md-1">
              <h4>{mailId}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
