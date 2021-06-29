import React, { useEffect, useState } from "react";
import { getMergeSortAnimations } from "./sortingAlgorithms.js";
import "./Visualizer.css";

const ANIMATION_SPEED_MS = 20 ;
const NUMBER_OF_ARRAY_BARS = 50;
const PRIMARY_COLOR = "#FE6D73";
const SECONDARY_COLOR = "#50FFB1";

function Visualizer() {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    resetArray();
  }, []);

  function resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 400));
    }
    setArray(array);
  }

  function mergeSort() {
    setIsSorting(true);
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    setIsSorting(false);
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}
          ></div>
        ))}
      </div>
      <button disabled={isSorting} className="button" onClick={() => resetArray()}>
        <strong>RESET BARS</strong>
      </button>
      <button disabled={isSorting} className="button" onClick={() => mergeSort()}>
        <strong>MERGE SORT</strong>
      </button>
    </>
  );
}

export default Visualizer;
