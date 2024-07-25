import React from "react";
import Container from "../Container/Container";
import "./style.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <div className="footer-content">
            <div class="social-links">
              <a href="https://www.facebook.com/yourpage" target="_blank">
                Facebook
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank">
                Twitter
              </a>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank">
                LinkedIn
              </a>
            </div>
            <div class="legal-links">
              <a href="/privacy-policy">Maxfiylik siyosati</a>
              <a href="/terms-of-service">Xizmat ko'rsatish shartlari</a>
            </div>
            <p>&copy; 2024 Expense Tracker. Barcha huquqlar himoyalangan.</p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
