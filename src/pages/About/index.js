import React from "react";
import Navbar from "../../components/Navbar/index";
import OurTeam from "../../components/ourTeam";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer";
import "./style.scss"

const About = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <div class="section about-company">
          <h2><span>Kompaniya </span>Haqida</h2>
          <p>
            Expense Tracker ilovasi 2024-yilda moliyaviy boshqaruvni
            soddalashtirish va odamlarning moliyaviy holatini yaxshilash
            maqsadida tashkil etilgan. Bizning missiyamiz - har bir insonning
            moliyaviy nazoratni qo'lga kiritishiga yordam berish va shaxsiy
            mablag'larni samarali boshqarishni osonlashtirishdir.
          </p>
        </div>
        <div class="section our-mission">
          <h2>Bizning <span> Missiyamiz</span></h2>
          <p>
            Biz moliyaviy boshqaruvni har bir inson uchun qulay va tushunarli
            qilishga intilamiz. Shuning uchun bizning jamoamiz xarajatlarni
            kuzatib borish, tahlil qilish va rejalashtirishni osonlashtiradigan
            innovatsion vositalarni yaratishga bag'ishlangan.
          </p>
        </div>
      </Container>
      <OurTeam />
      <Footer />
    </div>
  );
};

export default About;
