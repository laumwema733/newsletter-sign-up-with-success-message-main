"use strict";

document.getElementById("form").addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailInput = document.getElementById("email--input");

  const errorInput = document.getElementById("error-notification");
  const data = Object.fromEntries(new FormData(e.target));
  if (data.email === "" || !emailRegex.test(data.email)) {
    errorInput.textContent = "Valid email required";
    emailInput.classList.add("error");
  } else {
    errorInput.textContent = "";
    emailInput.classList.remove("error");
    emailInput.value = "";
    updateUI(data.email);
  }
}

function updateUI(data) {
  document.getElementById("news-letter-container").classList.add("hidden");
  document.getElementById("notification").classList.remove("hidden");
  document.getElementById("input-email").textContent = data;
}

document.addEventListener("click", (e) => {
  if (e.target.id === "btn-notification")
    document.getElementById("notification").classList.add("hidden");
  document.getElementById("news-letter-container").classList.remove("hidden");
});

//async

// fetch

// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// )
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`HTTP error:${res.status}`);
//     }
//     return res.json();
//   })
//   .then((data) => console.log(data));
// console.log(fetchPromise);

// fetchPromise.then((res) => {
//   const jsonPromise = res.json();
//   jsonPromise.then((data) => console.log(data[0].name));
//}
//);

// const data = fetch(
//   "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// )
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`HTTP error: ${res.status}`);
//     }
//     return res.json();
//   })
//   .then((data) => console.log(data[0].name))
//   .catch((error) => console.error(`Could not get products: ${error}`));

// console.log(data);

// const fetchData1 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );
// const fetchData2 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
// );
// const fetchData3 = fetch(
//   "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
// );

// Promise.any([fetchData1, fetchData2, fetchData2])
//   .then((responses) => {
//     for (const res of responses) {
//       console.log(`${res.url}: ${res.status}`);
//     }
//   })
//   .catch((error) => console.error(`Failed to fetch: ${error}`));

async function fetchProduct() {
  try {
    const responses = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );

    if (!responses.ok) {
      throw new Error(`HTTP error: ${responses.status}`);
    }
    const data = await responses.json();

    console.log(data[0].name);
  } catch (error) {
    console.log(`Could not get products: ${error}`);
  }
}

fetchProduct();
