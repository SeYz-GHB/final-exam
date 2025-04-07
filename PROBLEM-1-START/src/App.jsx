import React, { useState } from "react";
import ColorCard, { colors } from "./components/ColorCard"; 

export default function App() {
  
  const [cardColors, setCardColors] = useState({
    card1: colors[0],
    card2: colors[1], 
    card3: colors[4],
  });

  const handleColorChange = (cardKey) => {
    setCardColors((prevColors) => {
      const currentColor = prevColors[cardKey];
      const currentIndex = colors.indexOf(currentColor);
      const nextIndex = (currentIndex + 1) % colors.length;
      return {
        ...prevColors,
        [cardKey]: colors[nextIndex],
      };
    });
  };

  return (
    <div className="app">
      <h1>Colors chooser</h1>
      <div className="card-container">
        <ColorCard
          title="Background Color"
          color={cardColors.card1}
          onColorChange={() => handleColorChange("card1")}
        />
        <ColorCard
          title="Text Color"
          color={cardColors.card2}
          onColorChange={() => handleColorChange("card2")}
        />
        <ColorCard
          title="Stroke Color"
          color={cardColors.card3}
          onColorChange={() => handleColorChange("card3")}
        />
    
      </div>
    </div>
  );
}
