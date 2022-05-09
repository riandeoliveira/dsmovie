import { arrow } from "../../assets";
import "./styles.css";

export const Pagination = () => {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={true}>
          <img src={arrow} alt="Arrow icon" />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="dsmovie-pagination-button" disabled={false}>
          <img
            src={arrow}
            alt="Arrow icon"
            className="dsmovie-flip-horizontal"
          />
        </button>
      </div>
    </div>
  );
};
