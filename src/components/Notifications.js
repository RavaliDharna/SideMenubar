import React from "react";
//import { useState } from "react";
import styled from "styled-components";

const NavNotifications = styled.div`
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  width: 150px;
  border-radius: 15px;
  text-align: center;
  font-family: arial;
  height: 150px;
 
  
  background-color: white;
  
`;
const Notifications = () => {
  return (
    <NavNotifications>
      <h4 style={{ color: "black" }}> you have three notifications</h4>
      <h4 style={{ color: "black" }}> you have three notifications</h4>
      <h4 style={{ color: "black" }}> you have three notifications</h4>
    </NavNotifications>
  );
};

export default Notifications;
