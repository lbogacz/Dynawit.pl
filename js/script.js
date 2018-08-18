const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function (event) {

    const menu = document.querySelector('.main-nav-list ul');

    menu.classList.toggle('open');
})