import { React } from "react";
import styled from "styled-components";

const NavBar = styled.div`
  font-family: canada-type-gibson, proxima-nova, sans-serif;
  height: 100%;
  margin: 1rem 2rem;

  .sidenav {
    height: 100%;
    width: 160px;
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 20px;
  }

  .sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: block;
  }
`;

function Nav() {
  return (
    <NavBar>
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">
          &times;
        </a>
        <a href="#">Budget</a>
        <a href="#">Reports</a>
        <a href="#">All Accounts</a>
        <a href="#">Settings</a>
      </div>
    </NavBar>
  );
}

export default Nav;
