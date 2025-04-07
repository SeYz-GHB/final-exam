// ColorCard.jsx
export const colors = [
  "#5DADE2", // Blue
  "#E67E22", // Orange
  "#F5B041", // Yellow
  "#8E44AD", // Purple
  "#2ECC71", // Green
];

const ColorCard = ({ title, color, onColorChange }) => {
  return (
    <div
      className="card"
      style={{ backgroundColor: color }}
      onClick={onColorChange}
    >
      <h3>{title}</h3>
      <p>{color}</p>
    </div>
  );
};

export default ColorCard;
