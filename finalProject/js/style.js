// window.addEventListener('load', () => {
//     const hambutton = document.querySelector('.ham');
//     const mainnav = document.querySelector('#navigation');

//     hambutton.addEventListener('click', () => {
//         mainnav.classList.toggle('responsive')
//     }, false);

//     //To solve the mid resizing issue with responsive
//     //window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
// });

function toggleMobileMenu(){
    document.querySelector('#menu').classList.toggle('active')
    document.querySelector('.mobile-bar').classList.toggle('active')
    document.querySelector('.menu-sub').classList.toggle('active')
}