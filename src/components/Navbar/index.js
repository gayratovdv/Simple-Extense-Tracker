import React from "react";
import navLogo from "../../Assets/expense-tracker-app-gradient-icon-for-dark-theme-vector-39050859-removebg-preview.png";
import Container from "../Container/Container";
import "./style.scss";

const Navbar = () => {
  return (
    <div>
      <Container>
        <nav className="navbar">
          <a href="#">
            <img className="navLogo" src={navLogo} />
          </a>
          <ul className="navLists">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Add Expense</a>
            </li>
            <li>
              <a href="#">Edit Expense</a>
            </li>
          </ul>
          <div className="btns">
            <button className="loginBtn">Login</button>
            <button className="signupBtn">Sign Up</button>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
