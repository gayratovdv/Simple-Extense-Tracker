import React from "react";
import Navbar from "../../components/Navbar/index";
import mainImage from "../../Assets/main-image.jpg";
import Container from "../../components/Container/Container"
import "./style.scss";

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
                  <h1>Xush kelibsiz <span>Expense Tracker</span> ilovasiga</h1>
                  <p>
                    Bu ilova sizga o'z xarajatlaringizni boshqarishga yordam
                    beradi. Xarajatlaringizni qo'shing, tahrirlang va kuzatib
                    boring.
                  </p>
                </div>
                <img src={mainImage}></img>
              </div>
            </Container>
          </div>
        </main>
      </header>
    </div>
  );
}
