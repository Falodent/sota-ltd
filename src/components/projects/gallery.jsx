import React from "react";
import Img1 from "../../assets/gal1.png";
import Img2 from "../../assets/gal2.png";
import Img3 from "../../assets/gal3.png";
import Img4 from "../../assets/gal4.png";
import Img5 from "../../assets/gal5.png";
import Img6 from "../../assets/gal6.png";
import Img7 from "../../assets/gal7.png";
import Img8 from "../../assets/gal8.png";
import Img9 from "../../assets/gal9.png";
import Img10 from "../../assets/gal10.png";
import Img11 from "../../assets/gal11.png";
import Img12 from "../../assets/gal12.png";

const Gallery = () => {
  const images = [
    {
      img: Img1,
    },
    {
      img: Img2,
    },
    {
      img: Img3,
    },
    {
      img: Img4,
    },
    {
      img: Img5,
    },
    {
      img: Img6,
    },
    {
      img: Img7,
    },
    {
      img: Img8,
    },
    {
      img: Img9,
    },
    {
      img: Img10,
    },
    {
      img: Img11,
    },
    {
      img: Img12,
    },
  ];
  return (
    <div className="core gal">
      <p className="title headFont">Sota Gallery</p>
      <div className="gallery">
        {images.map((item, index) => (
          <img src={item.img} alt="" key={index} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
