/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }

// let arrow = document.querySelectorAll(".arrow");
// console.log(arrow);
// for (var i = 0; i < arrow.length; i++) {
//     const element = arrow[i].addEventListener("click", (e) => {

//         let arrowParent = e.target.parentElement.parentElement;
//         console.log(e);
//         arrowParent.classList.toggle("showMenu");
//     });

// }
// let sidebar = document.querySelector(".sidebar");
// console.log(arrowParent);

 let arrow = document.querySelectorAll(".arrow");
 for (var i = 0; i < arrow.length; i++) {
     arrow[i].addEventListener("click", (e) => {
         let arrowParent = e.target.parentElement.parentElement;
         arrowParent.classList.toggle("showMenu");
     });
 }

 let sidebar = document.querySelector(".sidebar");
 let sidebarBtn = document.querySelector(".bx-menu");
 console.log(sidebarBtn);
 sidebarBtn.addEventListener("click", () => {
     sidebar.classList.toggle("close");
 });