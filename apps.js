"use strict";

// document.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (!e.target.id === "email--input") return;
//   handleSubmit();
// });

const form = document.getElementById("form");

form.addEventListener("submit", handleSubmit);

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
