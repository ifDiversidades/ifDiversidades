const btnMobile = document.querySelector('.Header-Main__Bnt');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.querySelector('.Header-Main__Nav');
  nav.classList.toggle('Header-Main__Nav--Active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const widthScreen = window.screen.width;
const FooterMobileP = document.querySelectorAll(".Footer__P")

if(widthScreen < 800){
  FooterMobileP[0].innerText = "©404";
  FooterMobileP[1].innerText = "IFB";
}