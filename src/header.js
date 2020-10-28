const renderHeader = () => {
    let body = document.querySelector('body');
    let header = document.createElement('div');
    let headerTitle = document.createElement('h2');
  
    header.setAttribute("id", "header");
    headerTitle.classList.add("hero-text");
    headerTitle.innerText = "Welcome\nto\n Swear's Food Place";

    let hours = document.createElement('h3');
    hours.classList.add("hero-text");
    hours.innerText = "Hours: Mon - Fri 9AM -> 10PM \n Saturday 9AM - 12AM \n Sunday Closed";
  
    header.appendChild(headerTitle);
    header.appendChild(hours);
  
    body.insertBefore(header, document.querySelector('#content'));
  };
  
  export {renderHeader};