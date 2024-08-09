import React, { useEffect, useState } from "react";
import "./MyDetails.css";

const MyDetails = ({ Data }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const values = Object.values(Data);
    const keys = Object.keys(Data);
    const valueKeys = [];

    for (let i = 0; i < values.length; i++) {
      valueKeys[i] = { key: keys[i], value: values[i] };
    }

    setData(valueKeys);
  }, [Data]);
  return (
    <div>
      <section className="detailsContainer">
        {data.map((element) => (
          <div className="shadow">
            <span className="key">{element.key}: </span>
            <span className="value">{element.value}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MyDetails;
