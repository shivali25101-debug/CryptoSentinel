import { useState } from "react";

export default function useTilt() {
  const [style, setStyle] = useState({});

  const onMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const rotateX = (y - 0.5) * -10;
    const rotateY = (x - 0.5) * 10;

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const onMouseLeave = () => {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg)",
    });
  };

  return { style, onMouseMove, onMouseLeave };
}