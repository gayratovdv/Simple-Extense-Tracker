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
              <a href="#">Sayt haqida</a>
            </li>
            <li>
              <a href="#">Bog'lanish</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Xarajatni Qo'shish</a>
            </li>
            <li>
              <a href="#">Xarajatni Tahrirlash</a>
            </li>
          </ul>
          <div className="btns">
            <button className="loginBtn">Kirish</button>
            <button className="signupBtn">Ro'yxatdan O'tish</button>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
