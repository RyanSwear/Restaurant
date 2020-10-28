const renderHeader = () => {
    let body = document.querySelector('body');
    let header = document.createElement('div');
    let headerTitle = document.createElement('h2');
  
    header.setAttribute("id", "header");
    headerTitle.classList.add("hero-text");
    headerTitle.innerText = "Welcome\nto\n Swear's Food Place";
  
    header.appendChild(headerTitle);
  
    body.appendChild(header);
  };
  
  export {renderHeader};