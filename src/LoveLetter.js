import React, { useState, useEffect } from "react";
import { useSpring, useTrail, animated } from "@react-spring/web";
import "./App.css";

const messages = [
  "Will you be my Valentine? 💖",
  "Are you sure? 🥺",
  "Really sure? 🥹",
  "Think again... 😢",
  "Please? 😭",
  "I'm waiting... 😣",
];

const LoveLetter = () => {
  const [showQuestion, setShowQuestion] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);
  const [yesSize, setYesSize] = useState(1);
  const [showLetter, setShowLetter] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  // Захиа нээгдэх анимейшн
  const letterAnimation = useSpring({
    opacity: showLetter ? 1 : 0,
    transform: showLetter
      ? "translate(-50%, -50%) scale(1)"
      : "translate(-50%, -50%) scale(0.8)",
  });

  // Дэлгэц дүүрэн зүрх
  const hearts = new Array(247).fill(null);
  const heartTrail = useTrail(hearts.length, {
    opacity: showHearts ? 1 : 0,
    transform: showHearts
      ? "translateY(-20px) scale(1)"
      : "translateY(0px) scale(0.5)",
    config: { tension: 200, friction: 15 },
    reset: !showHearts,
  });

  // "No" товч дарах үед текст өөрчлөх
  const handleNoClick = () => {
    if (messageIndex < messages.length - 1) {
      setMessageIndex(messageIndex + 1);
      setYesSize(yesSize + 0.3);
    }
  };

  // "Yes" товч дарахад захиа + зүрхний эффект гарч ирэх
  const handleYesClick = () => {
    setShowQuestion(false);
    setShowLetter(true);
    setShowHearts(true);

    // Дуу тоглуулах
    const audio = new Audio("/married-life.mp3");
    audio.play().catch(error => console.log("Autoplay blocked:", error)); // Дууг тоглуулна
  };

  return (
    <div className="container">
      {showQuestion ? (
        <div className="question-box">
        <img
        src="https://media.giphy.com/media/fNxOuEFtjYt1ih0crz/giphy.gif?cid=790b7611y7708h3priafldytqtj4ktnutrxiqwua4cw1svys&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt="Cute Fingers Gif"
        style={{
          width:"100px",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
          animation: "bounce 1s infinite alternate"
                  }}/>
          <h2 className="question">{messages[messageIndex]}</h2>
          <div className="buttons">
            <button className="no-btn" onClick={handleNoClick}>No 😢</button>
            <button
              className="yes-btn"
              onClick={handleYesClick}
              style={{ transform: `scale(${yesSize})` }}
            >
              Yes! 💖
            </button>
          </div>
        </div>
      ) : null}

      {/* Дэлгэц дүүрэн зүрхнүүд */}
      {showHearts && (
        <div className="hearts-container">
          {heartTrail.map((style, index) => (
            <animated.span
              key={index}
              className="heart"
              style={{
                ...style,
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100}vh`,
                fontSize: `${Math.random() * 40 + 10}px`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              ❤️
            </animated.span>
          ))}
        </div>
      )}

      {/* Захиа */}
      {showLetter && (
        <animated.div className="love-letter" style={letterAnimation}>
          <p className="letter-content">

Хэдий хол байгаа ч гэсэн чамдаа чадах бүхий л зүйлсээрээ сэтгэлээ дамжуулахыг хүссэндээ энэ үгсийг бичиж сууна.Хөөрхөн Амуугаа бодохоор миний зүрх улам илүү хүчтэй цохилно. Үгсээр илэрхийлэхэд үнэхээр хэцүү гэдгийг би мэдэрч байна, гэхдээ сэтгэлдээ хайрлах нь аль хэдийн миний бүх амьдралын хамгийн үнэтэй мэдрэмж болчихсон шүү кк. Хаана ч байсан, би үргэлж таныг бодож, ойлгож байх болно гэдэгт итгэлтэй байна. Үнэхээр их санаж, сэтгэлээ сэтгэлд тань шилжүүлэх гэж оролдож байгаа ч энэ үгс хангалттай биш гэдгийг би мэднэ. 
Өдөр бүр харж, тэвэрч, үргэлж хамт байх тэр өдрийг тэсэн ядан хүлээж байна. Энэ холын зайн хайр маань бидний түүхийг улам гүнзгийрүүлж, илүү хүчтэй болгож буйг би мэдэрдэг. Намайг гэх хайр,дэмжлэг, мөн зүгээр л оршихуй чинь миний хамгийн үнэтэй зүйл болжээ. Гэхдээ би хайр гэж юу вэ гэдгийг мэдэхгүй байж болох ч надруу чиглэж буй тэр бүх мэдрэмж хайр гэж бодоход хүргэдэг.  Хэдий дандаа хэлээд байж чаддаггүй ч чамайг гэх сэтгэл минь үргэлж хайртайг минь илтгэнэ. Би чамдаа хайртай. 
            <br /><br />
            Харах бүрт чинь зүрх минь далай мэт давалгаална
            <br /><br />
            Хайр хүрэхэд салхи шиг намуухан илбэлнэ
            <br /><br />
            Чиний нүд бол оддын тунгалаг мөрөн
            <br /><br />
            Чимээгүй шөнө миний мөрөөдлийг аажуухан урсгана
            <br /><br />
            Инээмсэглэл чинь зуны нар шиг бүлээхэн
            <br /><br />
            Итгэл найдвар өгч, өдрийг гэрэлтүүлнэ
            <br /><br />
            Чи миний амьдралын хаврын анхны цэцэг
            <br /><br />
            Чимээгүйхэн дэлгэрч, ертөнцийг үзэсгэлэнтэй болгоно
            <br /><br />
            Дэргэд чинь би уул шиг бат бөх болж
            <br /><br />
            Дурлалын салхинд ч ганхахгүй зогсоно
            <br /><br />
            Чамайг бодохоор нарнаас гэрэл авдаг шиг
            <br /><br />
            Цаг хугацааг хүртэл хүлээлгэж, зүрх догдолдог
            <br /><br />
            Чи бол миний тэнгэрийн хязгаар
            <br /><br />
            Чимээгүйхэн мөрөөдөлдөө нисэх далавч
            <br /><br />
            Харин би чиний хөрстөд үндэслэх мод
            <br /><br />
            Хайрын гүн рүү бид хамтдаа урсах гол
            <br /><br />
            Чамдаа гэгээн хайрын valentine ын баярын мэнд чангаас чанга тэврэлт илгээе🫂🤍 Чиний бяцхан охиноос нь
          </p>
        </animated.div>
      )}
    </div>
  );
};

export default LoveLetter;
