window.addEventListener('load', (event) => {
    const lu = document.querySelector('#last-updated');
    lu.textContent = document.lastModified;

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();
})