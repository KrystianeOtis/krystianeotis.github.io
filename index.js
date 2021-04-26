let daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


let d = new Date();
let dayNum = d.getDate();
let monthNum = d.getMonth() + 1;
let monthName = months[d.getMonth()];
let hour = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();


let currentdate = monthNum + "/" + d.getDate() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();


try {
    let options = {
        monthNum: "numeric",
    };
    document.getElementById(
        "currentdate"
    ).textContent = new Date().toLocaleDateString("en-US", options);
} catch (e) {
    alert("Error with code or your browser does not support Locale");
}