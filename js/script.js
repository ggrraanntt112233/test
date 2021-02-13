const topNavBtn = document.querySelector('.top-nav-btn');
let topNavBtnOpen = false;
const topNav = document.querySelector('.top-nav');

topNavBtn.addEventListener('click', (e) => {
    if(!topNavBtnOpen) {
        topNavBtn.classList.add('open');
        topNav.style.transform = 'translateX(0%)';
        topNavBtnOpen = true;
    } else {
        topNavBtn.classList.remove('open');
        topNav.classList.add('mob-hide');
        topNav.style.transform = 'translateX(-100%)';
        topNavBtnOpen = false;
    }
});