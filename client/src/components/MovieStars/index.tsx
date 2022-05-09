import { starFull, starHalf, starEmpty } from "../../assets";
import "./styles.css";

export const MovieStars = () => {
  return (
    <div className="dsmovie-stars-container">
      <img src={starFull} alt="star icon" />
      <img src={starFull} alt="star icon" />
      <img src={starFull} alt="star icon" />
      <img src={starHalf} alt="star icon" />
      <img src={starEmpty} alt="star icon" />
    </div>
  );
};
