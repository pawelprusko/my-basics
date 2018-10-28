// document.addEventListener("DOMContentLoaded", function(){
//     var body = document.querySelector("body");
   
   
// //    function changeColor (event){
// // if(this.window.innerWidth <= 500) {
// // body.style.background = "yellow";
// // } else {
// //     body.style.background = "blue";   
// // }
// //    }

// // window.addEventListener("resize", changeColor); //przekazanie funkcji, bez wywołania ()
// //     changeColor();

// var mobile = window.matchMedia("screen and (max-width: 600px)");
// mobile.addListener(function(mobile){
//     if (mobile.matches) {
//         body.style.background = "green"
//     } else {
//         body.style.background = "brown"
//     }
// });  



// var menu = document.querySelector("#menu-trigger");
// var li = document.querySelectorAll("li");
// var ul = document.querySelector("ul");

// function hamburger (event){
//      if(this.window.innerWidth <= 600) {
       
//        menu.style.display = "block"; 
//        for (el of li) {
//         el.style.display = "block";
//         ul.style.display = "none";
//     }
//      } else {
//         menu.style.display = "none";
//         ul.style.display = "block";
//         for (el of li) {
//             el.style.display = "inline-block";
//         }   
//      }
//         }
//         window.addEventListener("resize", hamburger); 
//        hamburger();
  
//     });
document.addEventListener("DOMContentLoaded", function(){
    var baton = document.querySelector("#menu-trigger");
    var menu = document.querySelector(".menu");
    var body = document.querySelector("body");
    var mobile = window.matchMedia("screen and (max-width: 600px");
    function changeColorByMatchMedia(mobile){
        if(mobile.matches){
            body.style.backgroundColor = "blue"
        }else{
            body.style.backgroundColor = "white"
        }
    }
    mobile.addListener(function (mobile){
        changeColorByMatchMedia(mobile);
    });
    changeColorByMatchMedia(mobile);
   function hideBaton(){
        if (window.innerWidth <= 600) {
            menu.style.display = "none";
            baton.style.display = "block";
        }else if (window.innerWidth > 600) {
           menu.style.display = "block";
           baton.style.display = "none";
        }
    }
    baton.addEventListener("click", function(){
        if (menu.style.display == "block"){
            menu.style.display = "none";
        }else if (menu.style.display == "none"){
            menu.style.display = "block";
        }
    });
    window.addEventListener("resize", hideBaton);
    hideBaton();
    
});
