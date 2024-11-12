let navToggler = document.querySelector(".navbar-toggler");
let navMenubar = document.querySelector(".collapse.navbar-collapse");
let showclass = document.querySelector(".show");

document.addEventListener("DOMContentLoaded", function() {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#navbar-example',
      offset: 60
    });
  });


navMenubar.addEventListener("click", (e) => {
    if (e.target.tagName == "A") {

        navMenubar.classList.remove("show")


    }

})



let dayItem = document.querySelector("#days");
let hourItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");


let countDown = ()=>{
  let futureDate = new Date("30 November 2024");
  let currentDate = new Date();
  let myDate = futureDate-currentDate;

  let days = Math.floor(myDate/1000/60/60/24);
  let hours = Math.floor(myDate/1000/60/60) % 24;
  let mins = Math.floor(myDate/1000/60) % 60;
  let secs = Math.floor(myDate/1000) % 60;

  dayItem.innerHTML = days;
  hourItem.innerHTML = hours;
  minItem.innerHTML = mins;
  secItem.innerHTML = secs;


}

countDown()

setInterval(countDown, 1000)




function navMenu() {

  let scrollTopButton = document.querySelector("#scrollUp");

  window.onscroll = function () {
      var scroll = document.documentElement.scrollTop;

      if (scroll >= 250) {
          scrollTopButton.classList.add("scrollActive");
      } else {

          scrollTopButton.classList.remove("scrollActive");
      }

  }
}

navMenu()
