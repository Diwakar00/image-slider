import React, { useRef } from "react";
import "./styles.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrag, useDrop } from "react-dnd";
import Image from "./Image";

function ImageSlider({ images, moveImage }) {
  return (
    <div className="image-slider">
      <DndProvider backend={HTML5Backend}>
        {images.map((image, index) => (
          <Image
            image={image}
            index={index}
            key={`${image.id}-image`}
            moveImage={moveImage}
          />
        ))}
      </DndProvider>
    </div>
  );
}

export default ImageSlider;
