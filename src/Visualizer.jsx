import React, { useEffect, useState } from "react";
import { getMergeSortAnimations } from "./sortingAlgorithms.js";
import "./Visualizer.css";

const sortingSpeedInMs = 20;
const numberOfVerticalBars = 50;
const pink = "#FE6D73";
const green = "#50FFB1";

function Visualizer() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  function resetArray() {
    const array = [];
    for (let i = 0; i < numberOfVerticalBars; i++) {
      array.push(randomIntFromInterval(5, 400));
    }
    setArray(array);
  }

  function mergeSort() {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? green : pink;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * sortingSpeedInMs);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * sortingSpeedInMs);
      }
    }
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <>
      <div className="container">
        {array.map((value, index) => (
          <div
            className="bar"
            key={index}
            style={{
              backgroundColor: pink,
              height: `${value}px`,
            }}
          ></div>
        ))}
      </div>
      <button className="button" onClick={() => resetArray()}>
        <strong>RESET BARS</strong>
      </button>
      <button className="button" onClick={() => mergeSort()}>
        <strong>MERGE SORT</strong>
      </button>
    </>
  );
}

export default Visualizer;
