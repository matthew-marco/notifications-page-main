let links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

let resetNotifaction = document.querySelector("main .container a");
let notifcationCounter = document.querySelector("main .container h1 span");
let redDot = document.querySelectorAll(".notifactions .container .notifaction");
resetNotifaction.addEventListener("click", (e) => {
  notifcationCounter.innerHTML = "0";
  redDot.forEach(e => {
    e.classList.remove("active")
  })
});
