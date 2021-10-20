function contactUs(event) {
  event.preventDefault();
  let h4 = document.querySelector("h4");
  h4.innerHTML = "Thank you for reaching out!";
}

let email = document.querySelector("#email");
email.addEventListener("click", contactUs);
