import { useState } from "react";
import iconSlider from "../assets/images/icon-slider.svg";

type SliderProps = {
  options: number[];
  startingOption: number;
};

const Slider: React.FunctionComponent<SliderProps> = ({
  options,
  startingOption,
}) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  function handleMouseDown(event: MouseEvent): void {
    setIsMouseDown(true);
    const slider = document.querySelector(".slider") as HTMLDivElement;
    const mouseX = event.clientX - slider.getBoundingClientRect().left;
    const newPosition = Math.max(
      0,
      Math.min(100, (mouseX / slider.offsetWidth) * 100)
    );
    const closestPosition = options.reduce((prev, curr) =>
      Math.abs(curr - newPosition) < Math.abs(prev - newPosition) ? curr : prev
    );
    const sliderButton = document.querySelector(
      ".slider-button"
    ) as HTMLButtonElement;
    sliderButton.style.transform = `translateX(${closestPosition}%)`;
  }

  return (
    <div className="slider">
      <button
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseUp={() => setIsMouseDown(false)}
        onMouseLeave={() => setIsMouseDown(false)}
        className={
          isMouseDown ? "slider-button grabbing" : "slider-button grab"
        }
      >
        <img src={iconSlider} alt="" />
      </button>
    </div>
  );
};

export default Slider;

/* 

import React, { useState } from 'react';
import './Slider.css'; // Import your CSS file

const Slider = () => {
  const positions = [0, 25, 50, 75, 100]; // Percentage positions
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
    document.body.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const slider = document.querySelector('.slider');
    const mouseX = e.clientX - slider.getBoundingClientRect().left;
    const newPosition = Math.max(0, Math.min(100, (mouseX / slider.offsetWidth) * 100));

    const closestPosition = positions.reduce((prev, curr) =>
      Math.abs(curr - newPosition) < Math.abs(prev - newPosition) ? curr : prev
    );

    const sliderButton = document.querySelector('.slider-button');
    sliderButton.style.transform = `translateX(${closestPosition}%)`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.cursor = 'default';
  };

  return (
    <div className="slider" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <div className="slider-button" onMouseDown={handleMouseDown}></div>
    </div>
  );
};

export default Slider; */
