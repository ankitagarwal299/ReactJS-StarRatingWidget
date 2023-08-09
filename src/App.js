import "./styles.css";
import React, { useState, useEffect } from "react";

import StarWidget from "./components/StarWidget";

export default function App() {
  const [curIndex, setCurIndex] = useState(-1);

  return (
    <div className="App">
      <h1>ReactJS-StarRatingWidget (Amazon, Airbnb & Uber)</h1>

      <StarWidget curIndex={curIndex} setCurIndex={setCurIndex} />
    </div>
  );
}
