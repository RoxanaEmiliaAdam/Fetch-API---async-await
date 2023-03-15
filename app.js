"use strict";

const url = "https://jsonplaceholder.typicode.com/comments";
console.log();

// Select elements
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

let comment;

// Button event

const fetchData = async () => {
  result.innerText = "Loading...";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("There was an error...");
    }

    const data = await response.json();
    console.log(data);

    result.innerText = data[0].body;
  } catch (error) {
    result.textContent = "There was an error...";
  }
};

btn.addEventListener("click", fetchData);
