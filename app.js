const ratingCard = document.querySelector(".rating-card");
const buttons = document.querySelectorAll(".number")
const tyCard = document.querySelector(".ty-card")
const rate    = document.querySelector(".rate")

buttons.forEach(btn =>{
  btn.addEventListener("click", function(){
    btn.setAttribute("style", "background-color: hsl(25, 97%, 53%); color: white;")
    ratingCard.classList.add("visible")
    tyCard.classList.remove("visible")
   rate.textContent = `You selected ${btn.textContent} out of  5`
  })
})

