// let navBar=document.querySelector(".navbar");
let val;
let nav=document.querySelector("nav");
window.onscroll = function(){
    if(document.documentElement.scrollTop>15){
        nav.classList.add("sticky");
    }
    else{
        nav.classList.remove("sticky");
    }
}

// var typed = new Typed(".typing", {
//     strings: ["ICT Undergrad", "Competitive Programmer", "ReactJS Developer", "Open Source Contributor"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop:true

//  });
//  var typed = new Typed(".typing-2", {
//     strings: ["ICT Undergrad", "Competitive Programmer", "ReactJS Developer", "Open Source Contributor"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop:true

//  });
//  $(document).ready(function(){
    var typed = new Typed(".typing", {
        strings: ["ICT", "Competitive Programmer", "ReactJS Developer", "Open Source Contributor"],
        typeSpeed: 160,
        backSpeed: 60,
        loop:true
     });
//   });