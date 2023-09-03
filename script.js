


// var arr = [
//     {
//         poster: "https://d779j7urowt81.cloudfront.net/assets/card_1.4ca783ec.jpg",
//         video: "https://d779j7urowt81.cloudfront.net/videos/campnic.mp4",
//         h4: "Versatile",
//         h1: "Camping" 
//     },
//     {
//         poster: "https://d779j7urowt81.cloudfront.net/assets/card_2.899cdbc8.jpg",
//         video: "https://d779j7urowt81.cloudfront.net/videos/surfing.mp4",
//         h4: "Spacious",
//         h1: "Surfing" 
//     }
  
   
// ]

// var clutter="";

//  arr.forEach(function(val){
//   clutter += ` <div class="card">
//   <video class="card-video" muted loop poster="${val.poster}" src="${val.video}"></video>
//   <div id="content">
//    <h4>${val.h4}</h4>
//    <h1>${val.h1}</h1>
//    <i class="ri-arrow-right-s-line"></i>
//   </div>`
//  })

// document.querySelector("#cards").innerHTML = clutter

// --------------------------card1------------------------------

 var card = document.querySelector(".card")
var cardvideo = document.querySelector(".card video")
var cardcontent = document.querySelector(".card #content")
var mainbg = document.querySelector("#main")
var cardbtn = document.querySelector(".card #content i")

card.addEventListener("mouseenter",function(){
    cardvideo.play()
    card.style.transform = "translateY(-30px)"
    card.style.scale=1.1
    card.style.marginBottom = "50px"
    var src = cardvideo.poster;
    mainbg.style.backgroundImage= `url("${src}")`


    cardbtn.innerHTML = "lets go"
    cardbtn.style.padding = "7px 20px"
    cardbtn.style.borderRadius = "20px"
    cardbtn.style.backgroundColor = "rgba(255, 255, 255, 0.371)"
    cardbtn.style.border= "none"
    
})
card.addEventListener("mouseout",function(){
    cardvideo.pause()
    card.style.transform = "translateY(20px)"
    card.style.scale=1

    cardbtn.innerHTML = ""
    cardbtn.style.padding = ""
    cardbtn.style.borderRadius = ""
    cardbtn.style.backgroundColor = "transparent"
    cardbtn.style.border= ""
   
})


// --------------------------card2------------------------------




var card2 = document.querySelector("#cards .card:nth-child(2)")
var cardvideo2 = document.querySelector("#cards .card:nth-child(2) video")
var cardcontent2 = document.querySelector("#cards .card:nth-child(2) #content")
var mainbg = document.querySelector("#main")
var cardbtn2 = document.querySelector(".card:nth-child(2) #content i")



card2.addEventListener("mouseenter",function(){
    cardvideo2.play()
    card2.style.transform = "translateY(-30px)"
    card2.style.scale=1.1
    card2.style.marginBottom = "50px"
    var src = cardvideo2.poster;
    mainbg.style.backgroundImage= `url("${src}")`

    cardbtn2.innerHTML = "lets go"
    cardbtn2.style.padding = "7px 20px"
    cardbtn2.style.borderRadius = "20px"
    cardbtn2.style.backgroundColor = "rgba(255, 255, 255, 0.371)"
    cardbtn2.style.border= "none"
    
})
card2.addEventListener("mouseout",function(){
    cardvideo2.pause()
    card2.style.transform = "translateY(20px)"
    card2.style.scale=1

    
    cardbtn2.innerHTML = ""
    cardbtn2.style.padding = ""
    cardbtn2.style.borderRadius = ""
    cardbtn2.style.backgroundColor = "transparent"
    cardbtn2.style.border= ""


})

// --------------------------card3------------------------------



var card3 = document.querySelector("#cards .card:nth-child(3)")
var cardvideo3 = document.querySelector("#cards .card:nth-child(3) video")
var cardcontent3 = document.querySelector("#cards .card:nth-child(3) #content")
var mainbg = document.querySelector("#main")
var cardbtn3 = document.querySelector(".card:nth-child(3) #content i")

card3.addEventListener("mouseenter",function(){
    cardvideo3.play()
    card3.style.transform = "translateY(-30px)"
    card3.style.scale=1.1
    card3.style.marginBottom = "50px"
    var src = cardvideo3.poster;
    mainbg.style.backgroundImage= `url("${src}")`

    cardbtn3.innerHTML = "lets go"
    cardbtn3.style.padding = "7px 20px"
    cardbtn3.style.borderRadius = "20px"
    cardbtn3.style.backgroundColor = "rgba(255, 255, 255, 0.371)"
    cardbtn3.style.border= "none"
    
})
card3.addEventListener("mouseout",function(){
    cardvideo3.pause()
    card3.style.transform = "translateY(20px)"
    card3.style.scale=1

    
    cardbtn3.innerHTML = ""
    cardbtn3.style.color = ""

    cardbtn3.style.padding = ""
    cardbtn3.style.borderRadius = ""
    cardbtn3.style.backgroundColor = "transparent"
    cardbtn3.style.border= ""
})


// -----------------card4--------------------------

var card4 = document.querySelector("#cards .card:nth-child(4)")
var cardvideo4 = document.querySelector("#cards .card:nth-child(4) video")
var cardcontent4 = document.querySelector("#cards .card:nth-child(4) #content")
var mainbg = document.querySelector("#main")
var cardbtn4 = document.querySelector(".card:nth-child(4) #content i")

card4.addEventListener("mouseenter",function(){
    cardvideo4.play()
    card4.style.transform = "translateY(-30px)"
    card4.style.scale=1.1
    card4.style.marginBottom = "50px"
    var src = cardvideo4.poster;
    mainbg.style.backgroundImage= `url("${src}")`

    cardbtn4.innerHTML = "lets go"
    cardbtn4.style.padding = "7px 20px"
    cardbtn4.style.borderRadius = "20px"
    cardbtn4.style.backgroundColor = "rgba(255, 255, 255, 0.371)"
    cardbtn4.style.border= "none"
    
})
card4.addEventListener("mouseout",function(){
    cardvideo4.pause()
    card4.style.transform = "translateY(20px)"
    card4.style.scale=1

    
    cardbtn4.innerHTML = ""
    cardbtn4.style.padding = ""
    cardbtn4.style.borderRadius = ""
    cardbtn4.style.backgroundColor = "transparent"
    cardbtn4.style.border= ""
})



// ---------------card5---------------------


var card5 = document.querySelector("#cards .card:nth-child(5)")
var cardvideo5 = document.querySelector("#cards .card:nth-child(5) video")
var cardcontent5 = document.querySelector("#cards .card:nth-child(5) #content")
var mainbg = document.querySelector("#main")
var cardbtn5 = document.querySelector(".card:nth-child(5) #content i")

card5.addEventListener("mouseenter",function(){
    cardvideo5.play()
    card5.style.transform = "translateY(-30px)"
    card5.style.scale=1.1
    card5.style.marginBottom = "50px"
    var src = cardvideo5.poster;
    mainbg.style.backgroundImage= `url("${src}")`

    cardbtn5.innerHTML = "lets go"
    cardbtn5.style.padding = "7px 20px"
    cardbtn5.style.borderRadius = "20px"
    cardbtn5.style.backgroundColor = "rgba(255, 255, 255, 0.371)"
    cardbtn5.style.border= "none"
    
})
card5.addEventListener("mouseout",function(){
    cardvideo5.pause()
    card5.style.transform = "translateY(20px)"
    card5.style.scale=1

    
    cardbtn5.innerHTML = ""
    cardbtn5.style.padding = ""
    cardbtn5.style.borderRadius = ""
    cardbtn5.style.backgroundColor = "transparent"
    cardbtn5.style.border= ""
})


// --------------------cadr6--------------------

var card6 = document.querySelector("#cards .card:nth-child(6)")
var cardvideo6 = document.querySelector("#cards .card:nth-child(6) video")
var cardcontent6 = document.querySelector("#cards .card:nth-child(6) #content")
var mainbg = document.querySelector("#main")
var cardbtn6 = document.querySelector(".card:nth-child(6) #content i")

card6.addEventListener("mouseenter",function(){
    cardvideo6.play()
    card6.style.transform = "translateY(-30px)"
    card6.style.scale=1.1
    card6.style.marginBottom = "50px"
    var src = cardvideo6.poster;
    mainbg.style.backgroundImage= `url("${src}")`

    cardbtn6.innerHTML = "lets go"
    cardbtn6.style.padding = "7px 20px"
    cardbtn6.style.borderRadius = "20px"
    cardbtn6.style.backgroundColor = "rgba(255, 255, 255, 0.371)"
    cardbtn6.style.border= "none"
    
})
card6.addEventListener("mouseout",function(){
    cardvideo6.pause()
    card6.style.transform = "translateY(20px)"
    card6.style.scale=1

    
    cardbtn6.innerHTML = ""
    cardbtn6.style.padding = ""
    cardbtn6.style.borderRadius = ""
    cardbtn6.style.backgroundColor = "transparent"
    cardbtn6.style.border= ""
})


// ----------------card7-------------------



var card7 = document.querySelector("#cards .card:nth-child(7)")
var cardvideo7 = document.querySelector("#cards .card:nth-child(7) video")
var cardcontent7 = document.querySelector("#cards .card:nth-child(7) #content")
var mainbg = document.querySelector("#main")
var cardbtn7 = document.querySelector(".card:nth-child(7) #content i")

card7.addEventListener("mouseenter",function(){
    cardvideo7.play()
    card7.style.transform = "translateY(-30px)"
    card7.style.scale=1.1
    card7.style.marginBottom = "50px"
    var src = cardvideo7.poster;
    mainbg.style.backgroundImage= `url("${src}")`

    cardbtn7.innerHTML = "lets go"
    cardbtn7.style.padding = "7px 20px"
    cardbtn7.style.borderRadius = "20px"
    cardbtn7.style.backgroundColor = "rgba(255, 255, 255, 0.371)"
    cardbtn7.style.border= "none"
    
})
card7.addEventListener("mouseout",function(){
    cardvideo7.pause()
    card7.style.transform = "translateY(20px)"
    card7.style.scale=1

    
    cardbtn7.innerHTML = ""
    cardbtn7.style.padding = ""
    cardbtn7.style.borderRadius = ""
    cardbtn7.style.backgroundColor = "transparent"
    cardbtn7.style.border= ""
})


// -----------------card8--------------

var card8 = document.querySelector("#cards .card:nth-child(8)")
var cardvideo8 = document.querySelector("#cards .card:nth-child(8) video")
var cardcontent8 = document.querySelector("#cards .card:nth-child(8) #content")
var mainbg = document.querySelector("#main")
var cardbtn8 = document.querySelector(".card:nth-child(8) #content i")

card8.addEventListener("mouseenter",function(){
    cardvideo8.play()
    card8.style.transform = "translateY(-30px)"
    card8.style.scale=1.1
    card8.style.marginBottom = "50px"
    var src = cardvideo8.poster;
    mainbg.style.backgroundImage= `url("${src}")`

    cardbtn8.innerHTML = "lets go"
    cardbtn8.style.padding = "7px 20px"
    cardbtn8.style.borderRadius = "20px"
    cardbtn8.style.backgroundColor = "rgba(255, 255, 255, 0.371)"
    cardbtn8.style.border= "none"
    
})
card8.addEventListener("mouseout",function(){
    cardvideo8.pause()
    card8.style.transform = "translateY(20px)"
    card8.style.scale=1

    
    cardbtn8.innerHTML = ""
    cardbtn8.style.padding = ""
    cardbtn8.style.borderRadius = ""
    cardbtn8.style.backgroundColor = "transparent"
    cardbtn8.style.border= ""
})


// ----------------controls----------


var left = document.querySelector("#controls i:nth-child(1)")
var slidecard=document.querySelector("#cards")
var dot1 = document.querySelector("#dots h1:nth-child(1)")
var dot2 = document.querySelector("#dots h1:nth-child(2)")
var dot3 = document.querySelector("#dots h1:nth-child(3)")
var cardmargin = 300;
left.addEventListener("click",function(){
    
    
    
        slidecard.style.transform = `translateX(-${cardmargin + 460}px)`
    cardmargin += 460; 
    dot1.style.color="white"
    dot2.style.color="rgba(255, 255, 255, 0.32)"
    dot3.style.color="rgba(255, 255, 255, 0.32)"
    // console.log(cardmargin)
    

     
    
    
    
})
var right = document.querySelector("#controls i:nth-child(3)")
var slidecard2=document.querySelector("#cards")
var marginleft = 0;
right.addEventListener("click",function(){
   

    slidecard2.style.marginLeft=`${marginleft + 460}px`
marginleft += 460

dot3.style.color="white"
    dot2.style.color="rgba(255, 255, 255, 0.32)"
    dot1.style.color="rgba(255, 255, 255, 0.32)"
// console.log(marginleft)



   
})



gsap.to("#footer ",{
    y: -100,
    // x:300,
    
    scrollTrigger: {
        trigger: "#footer",
        scroller: "body",
        scrub: 1,
        // pin: true,
        start: "top 100%",
        end: "top 86%",
        // markers:true
    }
})
