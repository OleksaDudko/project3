import moon from "../img/ellipse7.png"
import sun from "../img/ellipse8.png"

const boxRef = document.querySelector(".header__box")
const circleRef = document.querySelector(".header__circle")
const imgRef = document.querySelector(".header__sun")
imgRef.style.src = sun
boxRef.addEventListener("click", ()=> {
circleRef.classList.toggle("active")

if(circleRef.classList.contains("active")){
    document.body.style.backgroundColor = "grey";
    boxRef.style.backgroundColor = "white";
    imgRef.src = moon;
    console.log(imgRef.style.src);
    circleRef.style.backgroundColor ="black"
}
else{
    document.body.style.backgroundColor = "white";
    boxRef.style.backgroundColor = "grey";
    imgRef.src = sun;
    console.log(imgRef.style.src);
    circleRef.style.backgroundColor ="white"
}
})