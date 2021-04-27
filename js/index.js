window.addEventListener('load', (event) => {
    const lu = document.querySelector('#last-updated');
    lu.textContent = document.lastModified;

    const cry = document.querySelector('#copyright-year');
    cry.textContent = new Date().getFullYear();
})