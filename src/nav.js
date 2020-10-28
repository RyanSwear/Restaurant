const renderNavbar = () => {
    let navBar = document.createElement('nav');
    navBar.classList.add('bg-color');
    navBar.innerText = "Swear's Food Place";


    let body = document.querySelector('body');
    body.insertBefore(navBar, document.querySelector('#content'));
  };
  
  export { renderNavbar };