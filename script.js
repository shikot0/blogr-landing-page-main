const showNavButton = document.getElementById('show-nav-button');
const nav = document.querySelector('nav');
const linkHeaders = document.querySelectorAll('.link-header');
linkHeaders.forEach(link => {
    link.addEventListener('click', () => {
        link.classList.toggle('visible')
    })
})
showNavButton.addEventListener('click', () => {
    if(nav.classList.contains('visible')) {
        showNavButton.innerHTML = `<img src="images/icon-hamburger.svg" alt="">`
        nav.classList.remove('visible')
    }else {
        showNavButton.innerHTML = `<img src="images/icon-close.svg" alt="">`
        nav.classList.add('visible')
    }
})
