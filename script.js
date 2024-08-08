let hour = document.querySelector(".hour")
let min = document.querySelector(".min")
let sec = document.querySelector(".sec")
let title = document.querySelector("h1")



function clockjs(){
    let date =  new Date()

    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()


    let hRotation = 30*h + m/2
    let mRotation = 6*m
    let sRotation = 6*s

    hour.style.transform = ` rotate(${hRotation}deg)`
    min.style.transform = ` rotate(${mRotation}deg)`
    sec.style.transform = ` rotate(${sRotation}deg)`
}


setInterval(() => {
    clockjs() 
}, 1000);

// -=======================-----------> Animation <=======================----------
text = title.innerHTML
console.log(text);

let count = 0
title.innerHTML = ""
function animationJs(){
    title.innerHTML += text.charAt(count)
    count++

    if(count>text.length){
        title.innerHTML = ""
        count = 0
    }

    
}


setInterval(() => {
    animationJs()
}, 700);