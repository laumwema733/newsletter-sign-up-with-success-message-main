"use strict";

// check email

const emailInput = document.getElementById("email--input");
const formEmail = document.getElementById("form");
const btnSubmit = document.getElementById("btn-submit");

function isEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

formEmail.addEventListener("submit", handleSubmit);

function activateBtn() {
  const value = emailInput.value.trim();

  if (isEmail(value)) {
    btnSubmit.classList.add("ready");
  } else {
    btnSubmit.classList.remove("ready");
  }
}

//validate input

emailInput.addEventListener("input", activateBtn);

function handleSubmit(e) {
  e.preventDefault();
  const errorInput = document.getElementById("error-notification");

  const data = Object.fromEntries(new FormData(e.target));
  const { email } = data;
  if (email === "" || !isEmail(email)) {
    errorInput.textContent = "Valid email required";
    emailInput.classList.add("error");
  } else {
    errorInput.textContent = "";
    emailInput.classList.remove("error");
    emailInput.value = "";
    updateUI(email);
  }
}

function updateUI(data) {
  document.getElementById("news-letter-container").classList.add("hidden");
  document.getElementById("notification").classList.remove("hidden");
  document.getElementById("input-email").textContent = data;
}

document.addEventListener("click", (e) => {
  if (e.target.id !== "btn-notification") return;
  document.getElementById("notification").classList.add("hidden");
  document.getElementById("news-letter-container").classList.remove("hidden");
  btnSubmit.classList.remove("ready");
});
