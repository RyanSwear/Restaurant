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

    let tab2 = document.createElement('li');
    tab2.innerText = "Entre's";

    let tab3 = document.createElement('li');
    tab3.innerText = "Deserts";

    let tab4 = document.createElement('li');
    tab4.innerText = "Beverages";

    tabs.appendChild(tab1);
    tabs.appendChild(tab2);
    tabs.appendChild(tab3);
    tabs.appendChild(tab4);

    wrapper.appendChild(tabs);

    content.appendChild(wrapper);
    
}

export {renderContent};