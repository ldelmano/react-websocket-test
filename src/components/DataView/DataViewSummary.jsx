import React from "react";
import "./styles.css";

const DataViewSummary = ({ data }) => {
  return (
    <div className="summary">
      {data &&
        data.map((item, index) => (
          <div key={index} className="summary-card">
            <p className="summary-card__title">ID: {item.id}</p>

            <p className="summary-card__subtitle">Temp: {item.temperature} C</p>
          </div>
        ))}
    </div>
  );
};

export default DataViewSummary;
