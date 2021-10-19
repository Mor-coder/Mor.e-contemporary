function contactUs(event) {
  event.preventDefault();
  let h4 = document.querySelector("h4");
  h4.innerHTML = "Thank you for reaching out";
}

let element = document.querySelector("h4");
element.addEventListener("click", contactUs);
