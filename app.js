"use strict";

const url = "https://jsonplaceholder.typicode.com/comments";
console.log();

// Select elements
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

// Async ()
const fetchData = async () => {
  result.innerText = "Loading...";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("There was an error...");
    }

    const data = await response.json();
    console.log(data);
    let resultData = "";
    data.map((item) => {
      resultData += `\n Post ID: ${item.postId} \n ID: ${item.id} \n Comment:\n "${item.body}"\n`;
    });

    result.innerText = resultData;
  } catch (error) {
    result.textContent = "There was an error...";
  }
};

// Button event
btn.addEventListener("click", fetchData);
