<<<<<<< HEAD
window.onscroll = function () {
  if (document.documentElement.scrollTop > 30) {
    document.getElementById("topHeader").classList.add("fix__top");
  } else {
    document.getElementById("topHeader").classList.remove("fix__top");
  }
=======

window.onscroll = function () {
    if (document.documentElement.scrollTop > 30) {
        document.getElementById("topHeader").classList.add("fix__top");
    } else {
        document.getElementById("topHeader").classList.remove("fix__top");
    }
>>>>>>> kieu_contact_404
};

// dark and light
document.getElementById("switchButton").onclick = function () {
<<<<<<< HEAD
  document.getElementById("mybody").classList.toggle("dark");
};

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
=======
    document.getElementById("mybody").classList.toggle("dark");
};

document.getElementById("fa__bars").onclick = function () {
    document.getElementById("fa__bars").style.display = "none";
    document.getElementById("fa__close").style.display = "block";
};
document.getElementById("fa__close").onclick = function () {
    document.getElementById("fa__bars").style.display = "block";
    document.getElementById("fa__close").style.display = "none";
>>>>>>> kieu_contact_404
};
