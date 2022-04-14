import React from "react";
import DataViewChart from "./DataViewChart";
import DataViewSummary from "./DataViewSummary";

const DataView = ({ history, last }) => {
  return (
    <div>
      <DataViewSummary data={last} />

      <DataViewChart history={history} />
    </div>
  );
};

export default DataView;
