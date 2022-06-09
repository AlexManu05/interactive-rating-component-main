const ratingCard = document.querySelector(".rating-card");
const numberButtons = document.querySelectorAll(".number")
const tyCard = document.querySelector(".ty-card")
const rate    = document.querySelector(".rate")
const submitBtn = document.querySelector(".btn")
let btnRating = 2;

submitBtn.addEventListener("click", submit)
numberButtons.forEach(btn =>{
  btn.addEventListener("click", handleClick)
})


function submit(){
  ratingCard.classList.add("visible")
  tyCard.classList.remove("visible")
}

function handleClick(event) {
numberButtons.forEach(btn =>{
  btn.classList.remove("active")
});
event.target.classList.add("active")
btnRating = event.target.textContent;
rate.textContent = `You selected ${btnRating} out of  5`
}

