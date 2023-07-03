const api_url = "https://pizza-api.projectcodex.net/api/pizzas";

async function getPizza() {

    // Making an API call (request)
    // and getting the response back
    const response = await fetch(api_url);

    // Parsing it to JSON format
    const data = await response.json();
    console.log(data.pizzas);
    const pizza = data.pizzas;

    // Retrieving data from JSON
    // console.log(pizza)
    // for (let index = 0; index < data.pizzas.length; index++) {
    //     const pizza = data.pizzas[index];
    //     // const element = array[index];
        
    //     let size = pizza.size;
    //     let flavour = pizza.flavour;
    //     let price = pizza.price;
    //     let type = pizza.type;
        
    //     // accessing the span container
    //     document.querySelector("#size").textContent = size;
    //     document.querySelector("#flavour").textContent = flavour;
    //     document.querySelector("#price").textContent = price;
    //     document.querySelector("#type").textContent = type;
    // }
    var table = document.querySelector('.table');
    var tableBody = table.querySelector('tbody');
    
    // Loop through the JSON data and create table rows
    for (let index = 0; index < data.pizzas.length; index++) {
        const pizza = data.pizzas[index];

       var row = document.createElement('tr');
       var sizeCell = document.createElement('td');
       var typeCell = document.createElement('td');
       var priceCell = document.createElement('td');
       var flavourCell = document.createElement('td');

       sizeCell.textContent = pizza.size;
       typeCell.textContent = pizza.type;
       priceCell.textContent =  pizza.price;
       flavourCell.textContent = pizza.flavour;
       
       row.appendChild(sizeCell);
       row.appendChild(typeCell);
       row.appendChild(priceCell);
       row.appendChild(flavourCell);
       
       tableBody.appendChild(row);
    }

}

// Calling the function
getPizza();