const btnMobile = document.querySelector('.Header-Main__Bnt');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.querySelector('.Header-Main__Nav');
  nav.classList.toggle('Header-Main__Nav--Active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

window.addEventListener('resize', function () {
  const widthScreen = window.screen.width;
  if(widthScreen < 800){
    document.querySelectorAll(".Footer__P")[1].innerText = "IFB";
  }else{
    document.querySelectorAll(".Footer__P")[1].innerText = "Instituto Federal de Brasília - IFB";
  }
});
