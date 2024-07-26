import React from "react";
import navLogo from "../../Assets/expense-tracker-app-gradient-icon-for-dark-theme-vector-39050859-removebg-preview.png";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import "./style.scss";

const Navbar = () => {
  return (
    <div>
      <Container>
        <nav className="navbar">
          <Link to="/">
            <img className="navLogo" src={navLogo} />
          </Link>
          <ul className="navLists">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="About">Sahifa haqida</Link>
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
