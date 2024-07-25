import React from "react";
import Navbar from "../../components/Navbar/index";
import mainImage from "../../Assets/main-image.jpg";
import Container from "../../components/Container/Container";
import "./style.scss";
import AddInfo from "../../components/addInfo";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
        <main>
          <div className="header_section">
            <Container>
              <div className="header-section_content">
                <div className="content_wrapper">
                  <h1>
                    Xush kelibsiz <span>Expense Tracker</span> ilovasiga
                  </h1>
                  <p>
                    Bu ilova sizga o'z xarajatlaringizni boshqarishga yordam
                    beradi. Xarajatlaringizni qo'shing, tahrirlang va kuzatib
                    boring. Ro'yxatdan o'ting yoki kirish tugmasi orqali
                    hisobingizga kiring.Xarajatlarni qo'shish tugmasi orqali
                    yangi xarajatlarni kiritishingiz mumkin.
                  </p>
                  <div className="btns_wrapper">
                    <button className="loginBtn">Kirish</button>
                    <button className="signupBtn">Ro'yxatdan O'tish</button>
                  </div>
                </div>
                <img src={mainImage}></img>
              </div>
              <AddInfo/>
            </Container>
          </div>
        </main>
      </header>
      <Footer/>
    </div>
  );
}
