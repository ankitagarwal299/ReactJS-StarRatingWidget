import React, { useState } from "react";

export default function StarWidget({ curIndex, setCurIndex }) {
  console.log(curIndex);

  const [hoverIndex, setHoverIndex] = useState(-1);

  console.log("hoverIndex->", hoverIndex);

  return (
    <>
      <div className="star-container">
        {Array.from({ length: 5 }).map((s, index) => {
          return (
            <span
              key={index}
              onClick={() => setCurIndex(index + 1)}
              className={`star ${
                hoverIndex !== -1
                  ? index < hoverIndex && "active"
                  : index < curIndex && "active"
              }`}
              onMouseEnter={() => setHoverIndex(index + 1)}
              onMouseOut={() => setHoverIndex(-1)}
            >
              &#9734;
            </span>
          );
        })}
      </div>
    </>
  );
}
//Very important
// className={`star ${ (hoverIndex !== -1) ? (index < hoverIndex && "active"): (index < curIndex && "active")}` }
