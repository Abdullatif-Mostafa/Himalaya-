window.onscroll = function() {
    scrollFunction();
  };
console.log("data")
  function scrollFunction() {
    var navbar = document.getElementById("navbar");
  console.log(navbar)
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  console.log("data");