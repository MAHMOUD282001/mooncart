import React, { useState } from "react";

function HeroItemLogic(colors, prices) {
  let [selectedColor, setSelectedColor] = useState(colors[0].value);
  let [selectedPrice, setSelectedPrice] = useState(
    prices.find((price) => price.color === colors[0].value)
  );

  let handleSelectColor = (color) => {
    setSelectedColor(color);
    setSelectedPrice(prices.find((price) => price.color === color));
  };

  return [selectedColor, selectedPrice, handleSelectColor];
}

export default HeroItemLogic;
