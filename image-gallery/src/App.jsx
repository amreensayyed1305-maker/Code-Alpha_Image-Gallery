import { useState } from "react";
import "./App.css";

const images = [
  { src: "https://picsum.photos/id/1015/800/600", title: "Mountains" },
  { src: "https://picsum.photos/id/1011/800/600", title: "City" },
  { src: "https://picsum.photos/id/237/800/600", title: "Dog" },
  { src: "https://picsum.photos/id/1040/800/600", title: "Forest" }
];

export default function App() {
  const [active, setActive] = useState(null);

  const next = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>

      <h1 className="title">Instagram Style Gallery</h1>

      <div className="grid">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            onClick={() => setActive(i)}
            className="card"
          />
        ))}
      </div>

      {active !== null && (
        <div className="modal" onClick={() => setActive(null)}>

          <button className="prev" onClick={(e)=>{e.stopPropagation();prev();}}>‹</button>

          <img
            src={images[active].src}
            className="modal-img"
            onClick={(e)=>e.stopPropagation()}
          />

          <button className="next" onClick={(e)=>{e.stopPropagation();next();}}>›</button>

        </div>
      )}

    </div>
  );
}