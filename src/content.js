const menu = {
    food: {
        Appetizers: {
            name : ['Bruschetta', 'Fried Calamari', 'Shrimp Scampi'],
            desc : ['Grilled country bread with Roma tomatoes, olive oil, garlic and basil.', 'Breaded calamari, lightly fried in canola oil. Served with a side of marinara.', 'Jumbo shrimp sauteed in white wine, butter and garlic.'],
            price: ['$8', '$7', '$7.50']
        },
        Entres: {
            name: ['Baconator', 'NY Steak', 'Chicken Parm'],
            desc: ["Wendy's rip-off", "Stolen from Applebees", "Chicken, parm, red sauce"],
            price:['$10', '$20', '$15']
        }
    },
    Beverages:{
        Beer:{
            name: ['Coors', 'Guiness', 'Budlight', 'Pale Ale'],
            price: ['$2.50', '$3.00', '$1.00', '$2.25']
        },
        Soda:{
            name: ['Dew', 'Pepper', 'Root Beer', 'Pepsi', 'Fanta'],
            price:['$1.00', '$1.00', '$1.00', '$1.00']
        }
    },
    Desert:{
        Name: ['Lava Cake', 'Cheese Cake', 'Floater'],
        Desc: ['Molten Chocolate cake with a side of vanilla ice cream', 'Import from the factory', 'A&W Root Beer Float'],
        Price:['$3.50', '$4.00', '$2.00'],
    }
};





const renderContent = () => {
    let content = document.getElementById('content');

    let wrapper = document.createElement('div');
    let tabs = document.createElement('ul');

    let tab1 = document.createElement('li');
    tab1.innerText = 'Appetizers';
    tab1.addEventListener('click', function (){
        fillMenu(tab1.innerText);
    });

    let tab2 = document.createElement('li');
    tab2.innerText = "Entre's";
    tab2.addEventListener('click', function (){
        fillMenu(tab2.innerText);
    });

    let tab3 = document.createElement('li');
    tab3.innerText = "Deserts";
    tab3.addEventListener('click', function (){
        fillMenu(tab3.innerText);
    });

    let tab4 = document.createElement('li');
    tab4.innerText = "Beverages";
    tab4.addEventListener('click', function (){
        fillMenu(tab4.innerText);
    });

    tabs.appendChild(tab1);
    tabs.appendChild(tab2);
    tabs.appendChild(tab3);
    tabs.appendChild(tab4);

    let menu = document.createElement('div');
    menu.id = "menu";
    //menu.innerText = 'heello my friendings';

    wrapper.appendChild(tabs);
    wrapper.appendChild(menu);

    content.appendChild(wrapper);
    
}

const fillMenu = (text) => {
    let menu = document.getElementById('menu');
    menu.innerText = 'goooooaaaaallllll';
    if(text == 'Appetizers')
    {
        //menu = document.getElementById('menu');
        menu.innerText = 'hello my friendlings';
    }
}

const renderAppetizer = () => {
    div = document.createElement('div');
    div.innerText = "testing my friend";
    return div;
}

export {renderContent};