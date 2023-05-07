//back to top
window.onscroll = function () {
  if (document.documentElement.scrollTop > 30) {
    document.getElementById("backTotop").style.display = "block";
    document.getElementById("main__menu").classList.add("fix__top");
  } else {
    document.getElementById("backTotop").style.display = "none";
    document.getElementById("main__menu").classList.remove("fix__top");
  }
  document.getElementById("backTotop").onclick = function () {
    document.documentElement.scrollTop = 0;
  };
};
window.onscroll = function () {
  if (document.documentElement.scrollTop > 30) {
    document.getElementById("topHeader").classList.add("fix__top");
  } else {
    document.getElementById("topHeader").classList.remove("fix__top");
  }
};

// dark and light
document.getElementById("switchButton").onclick = function () {
  document.getElementById("mybody").classList.toggle("dark");
  // var SetTheme = document.getElementById("mybody").classList.toggle("dark");
  var theme;

  if (document.getElementById("mybody").classList.contains("dark")) {
    console.log("Dark mode");
    theme = "DARK";
  } else {
    console.log("Light mode");
    theme = "LIGHT";
  }

  // save to localStorage

  localStorage.setItem("PageTheme", JSON.stringify(theme));
  // ensure you convert to JSON like have done ----- JSON.stringify(theme)
};
let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
console.log("GetTheme");

if (GetTheme === "DARK") {
  document.getElementById("mybody").classList = "dark";
}

// document.getElementById("btnBarClose").onclick = function () {
//   if ((document.getElementById("fa__bars").style.display = "none")) {
//     // document.getElementById("fa__bars").style.display = "none";
//     document.getElementById("fa__close").style.display = "block";
//   } else {
//     document.getElementById("fa__bars").style.display = "block";
//     document.getElementById("fa__close").style.display = "none";
//   }
// };
document.getElementById("fa__bars").onclick = function () {
  document.getElementById("fa__bars").style.display = "none";
  document.getElementById("fa__close").style.display = "block";
};
document.getElementById("fa__close").onclick = function () {
  document.getElementById("fa__bars").style.display = "block";
  document.getElementById("fa__close").style.display = "none";
};
