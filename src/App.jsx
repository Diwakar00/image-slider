import React, { useState } from "react";
import "./App.css";
import ImageSlider from "./componenets/ImageSlider";
import update from "immutability-helper";

function App() {
  const [images, setImages] = useState([
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
    },
  ]);

  const moveImage = (dragIndex, hoverIndex) => {
    const draggedImage = images[dragIndex];
    setImages(
      update(images, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggedImage],
        ],
      })
    );
  };

  return (
    <div className="content">
      <h1 className="title">Image slider</h1>
      <div className="image-slider-wrapper">
        <ImageSlider images={images} moveImage={moveImage} />
      </div>
    </div>
  );
}

export default App;
