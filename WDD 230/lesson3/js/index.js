window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('responsive')
    }, false);
});

window.addEventListener('load', (event) => {
    const lu = document.querySelector('#last-updated');
    lu.textContent = document.lastModified;

    const cry = document.querySelector('#copyright-year');
    cry.textContent = new Date().getFullYear();
});