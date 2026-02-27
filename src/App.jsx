import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const audioRef = useRef(null);
  const [showSurprise, setShowSurprise] = useState(false);

  const galleryImages = [
    "/images/img11.jpeg",
    "/images/img22.jpeg",
    "/images/img2.jpeg",
    "/images/img3.jpeg",
    "/images/img4.jpeg",
    "/images/img5.jpeg",
  ];

  return (
    <div className="container">
      {/* HERO */}
      <header className="hero">
        <h1>💖 Happy Anniversary 💖</h1>
        <p>Didi & Jiju – A Beautiful Love Story</p>
        <div className="hearts">❤️ 💕 💖 💝</div>
      </header>

      {/* GALLERY */}
      <section className="gallery">
        {galleryImages.map((img, index) => (
          <div className="gallery-item book-page" key={index}>
            <img src={img} alt={`Memory ${index + 1}`} />
          </div>
        ))}
      </section>

      {/* MUSIC */}
      <section className="music card">
        <h2>🎵 Special Song 🎵</h2>
        <audio
          ref={audioRef}
          src="/crystaleyeofficial-wedding-party-happy-anniversary-celebration-background-music-374849.mp3"
        />
        <div className="buttons">
          <button onClick={() => audioRef.current.play()}>▶ Play</button>
          <button onClick={() => audioRef.current.pause()}>⏸ Pause</button>
        </div>
      </section>

      {/* SURPRISE */}
      <section className="surprise">
        <button
          className="surprise-btn"
          onClick={() => setShowSurprise(!showSurprise)}
        >
          🎁 {showSurprise ? "Hide Surprise" : "Click for Surprise"} 🎁
        </button>

        {showSurprise && (
          <div className="surprise-box fade-in">
            <h2>💐 शुभकामनाएं 💐</h2>
            <p>
              Didi & Jiju 💖 <br /><br />
              आप दोनों की जोड़ी यूँ ही उम्र भर मुस्कुराती रहे।  
              हर दिन आपका रिश्ता और भी गहरा, मजबूत और खूबसूरत होता जाए ❤️  
              प्यार, विश्वास और समझदारी हमेशा आपके साथ रहे।  
              आपका घर हँसी, खुशी और ढेर सारी यादों से भरा रहे 🌸  
              <br /><br />
              आप दोनों को शादी की सालगिरह की ढेरों शुभकामनाएँ 🎉💍
            </p>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer>
        Made with ❤️ by your loving brother <br></br>
        RAMPAL GOUR
      </footer>
    </div>
  );
}

export default App;