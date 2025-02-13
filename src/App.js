import React, { useEffect } from "react";
import LoveLetter from "./LoveLetter";
import "./App.css";

function App() {
  useEffect(() => {
    const audio = new Audio("../public/married-life.mp3");
    audio.loop = true; // Дууг давтаж тоглуулах
    audio.volume = 0.1; 
    const playAudio = () => {
      audio.play().catch(error => console.log("Autoplay blocked:", error));
    };

    // Хэрэглэгч товч дарахад дууг идэвхжүүлэх
    document.addEventListener("click", playAudio, { once: true });

    return () => document.removeEventListener("click", playAudio);
  }, []);

  return (
    <div className="App">
      <LoveLetter />
    </div>
  );
}
export default App;