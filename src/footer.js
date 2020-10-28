const renderFooter = () => {
    let footer = document.createElement('div');
    footer.setAttribute("id", "footer");
    footer.innerText = "Located: 1234 Number St. State, USA";
    document.querySelector('body').appendChild(footer);
}

export {renderFooter};