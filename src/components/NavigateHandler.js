import React from "react";
import EmployeeList from "./EmployeeList";
import { useNavigate } from "react-router-dom";
const NavigateHandler = (props) => {
  const navigation = useNavigate();
  var Component;
  return <EmployeeList navigation={navigation} />;
};

export default NavigateHandler;
