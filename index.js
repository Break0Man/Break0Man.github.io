const email = document.getElementById("email")
const next = document.getElementById('next')
const signin = document.querySelector(".signin")

email.addEventListener('click' , function() {
    email.style.border = "solid 2px rgb(0, 110, 255)"
    console.log("ddd")
})

next.addEventListener('click' , function() {
    signin.style.transform = "translateX(-500px)"
})

