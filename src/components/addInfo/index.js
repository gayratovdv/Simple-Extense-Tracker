import React from "react";
import "./style.scss";

const AddInfo = () => {
  return (
    <>
      <div className="additional_info">
        <div className="additional_info__content">
          <div className="additional-info_wrapper">
            <h2>
              Nima uchun <span>Expense Tracker</span> ilovasini ishlatishingiz
              kerak?
            </h2>
            <p>
              Expense Tracker ilovasi sizning moliyaviy holatingizni nazorat
              qilish va boshqarishga yordam beradi. Quyidagi afzalliklar siz
              uchun mavjud:
            </p>
            <ul>
              <li>
                <strong>Moliyaviy nazorat:</strong> Xarajatlaringizni kuzatib
                borish orqali moliyaviy holatingizni yaxshiroq tushunishingiz
                mumkin.
              </li>
              <li>
                <strong>Tezkor tahlil:</strong> Xarajatlaringiz bo'yicha
                hisobotlar va grafiklar yordamida moliyaviy tendensiyalarni
                ko'rishingiz mumkin.
              </li>
              <li>
                <strong>Rejalashtirish:</strong> Xarajatlaringizni kuzatib,
                kelajakdagi moliyaviy rejalaringizni tuzishingiz mumkin.
              </li>
              <li>
                <strong>Foydalanish qulayligi:</strong> Ilova intuitiv interfeys
                va oson foydalanish imkonini beradi.
              </li>
            </ul>
          </div>

          <div className="additional-info_wrapper">
            <h2>
              <span>Ilovadan</span> qanday foydalanish mumkin?
            </h2>
            <p>Ilovadan foydalanish juda oson:</p>
            <ol>
              <li>
                Ro'yxatdan o'ting yoki kirish tugmasi orqali hisobingizga
                kiring.
              </li>
              <li>
                Xarajatlarni qo'shish tugmasi orqali yangi xarajatlarni
                kiritishingiz mumkin.
              </li>
              <li>
                Asosiy sahifada barcha xarajatlaringizni ko'rib chiqishingiz va
                tahrirlashingiz mumkin.
              </li>
              <li>
                Hisobotlar bo'limida moliyaviy holatingiz bo'yicha grafiklar va
                statistikani ko'rishingiz mumkin.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddInfo;
