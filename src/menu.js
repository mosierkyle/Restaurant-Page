export const loadMenuPage = () => {
    const content = document.querySelector('#content');
    const page2 = document.createElement('div');
    const mains = document.createElement('div');
    const mainsHeader = document.createElement('div');
    const mainsHeaderHeadline = document.createElement('h1');
    const mainsItems = document.createElement('div')
    const pizzas = document.createElement('div')
    const pastas = document.createElement('div')

    mains.setAttribute('id', 'mains');
    mainsHeader.setAttribute('id', 'mains-header');
    mainsHeaderHeadline.setAttribute('id', 'mains-header-headline');
    mainsItems.setAttribute('id', 'mains-items');
    page2.setAttribute('id', 'page2')
    pastas.setAttribute('id', 'pastas')
    pizzas.setAttribute('id', 'pizzas')

    mainsHeaderHeadline.textContent = 'MERENDA'

    content.appendChild(page2);
    page2.appendChild(mains);
    mains.appendChild(mainsHeader);
    mainsHeader.appendChild(mainsHeaderHeadline)
    mains.appendChild(mainsItems);
    mainsItems.appendChild(pizzas);
    mainsItems.appendChild(pastas);

    //pizzas 

    //meal 1
    const mealDiv1 = document.createElement('div');
    const mealDivName1 = document.createElement('p')
    const mealDivDesc1 = document.createElement('p')
    const mealDivPrice1 = document.createElement('p')

    mealDiv1.setAttribute('class', 'meal-div')
    mealDivName1.setAttribute('class', 'meal-div-name')
    mealDivDesc1.setAttribute('class', 'meal-div-desc')
    mealDivPrice1.setAttribute('class', 'meal-div-price')

    mealDivName1.textContent = `Suspendisse`
    mealDivDesc1.textContent = `Mozzarella, garlic-infused olive oil & our authentic pizza sauce`
    mealDivPrice1.textContent = `19.99`

    pizzas.appendChild(mealDiv1);
    mealDiv1.appendChild(mealDivName1)
    mealDiv1.appendChild(mealDivDesc1)
    mealDiv1.appendChild(mealDivPrice1)

    //meal 2
    const mealDiv2 = document.createElement('div');
    const mealDivName2 = document.createElement('p')
    const mealDivDesc2 = document.createElement('p')
    const mealDivPrice2 = document.createElement('p')

    mealDiv2.setAttribute('class', 'meal-div')
    mealDivName2.setAttribute('class', 'meal-div-name')
    mealDivDesc2.setAttribute('class', 'meal-div-desc')
    mealDivPrice2.setAttribute('class', 'meal-div-price')

    mealDivName2.textContent = `Pizza con Formaggio`
    mealDivDesc2.textContent = `Large slices of pepperoni, mozzarella, provolone & our authentic pizza sauce`
    mealDivPrice2.textContent = `19.99`

    pizzas.appendChild(mealDiv2);
    mealDiv2.appendChild(mealDivName2)
    mealDiv2.appendChild(mealDivDesc2)
    mealDiv2.appendChild(mealDivPrice2)

    //meal 3
    const mealDiv3 = document.createElement('div');
    const mealDivName3 = document.createElement('p')
    const mealDivDesc3 = document.createElement('p')
    const mealDivPrice3 = document.createElement('p')

    mealDiv3.setAttribute('class', 'meal-div')
    mealDivName3.setAttribute('class', 'meal-div-name')
    mealDivDesc3.setAttribute('class', 'meal-div-desc')
    mealDivPrice3.setAttribute('class', 'meal-div-price')

    mealDivName3.textContent = `Margherita`
    mealDivDesc3.textContent = `fresh mozzarella, fresh basil & our authentic pizza sauce`
    mealDivPrice3.textContent = `19.99`

    pizzas.appendChild(mealDiv3);
    mealDiv3.appendChild(mealDivName3)
    mealDiv3.appendChild(mealDivDesc3)
    mealDiv3.appendChild(mealDivPrice3)

    //meal 4
    const mealDiv4 = document.createElement('div');
    const mealDivName4 = document.createElement('p')
    const mealDivDesc4 = document.createElement('p')
    const mealDivPrice4 = document.createElement('p')

    mealDiv4.setAttribute('class', 'meal-div')
    mealDivName4.setAttribute('class', 'meal-div-name')
    mealDivDesc4.setAttribute('class', 'meal-div-desc')
    mealDivPrice4.setAttribute('class', 'meal-div-price')

    mealDivName4.textContent = `Spicy Arrabbiata`
    mealDivDesc4.textContent = `spicy Italian sausage, pepperoni, caramelized red onions, Gorgonzola, mozzarella, provolone & our authentic pizza sauce`
    mealDivPrice4.textContent = `19.99`

    pizzas.appendChild(mealDiv4);
    mealDiv4.appendChild(mealDivName4)
    mealDiv4.appendChild(mealDivDesc4)
    mealDiv4.appendChild(mealDivPrice4)

    //meal 2
    const mealDiv5 = document.createElement('div');
    const mealDivName5 = document.createElement('p')
    const mealDivDesc5 = document.createElement('p')
    const mealDivPrice5 = document.createElement('p')

    mealDiv5.setAttribute('class', 'meal-div')
    mealDivName5.setAttribute('class', 'meal-div-name')
    mealDivDesc5.setAttribute('class', 'meal-div-desc')
    mealDivPrice5.setAttribute('class', 'meal-div-price')

    mealDivName5.textContent = `Meatball Rollato`
    mealDivDesc5.textContent = `sliced famous meatballs, pepperoni, spinach, ricotta, mozzarella, provolone & our authentic marinara on the side`
    mealDivPrice5.textContent = `19.99`

    pizzas.appendChild(mealDiv5);
    mealDiv5.appendChild(mealDivName5)
    mealDiv5.appendChild(mealDivDesc5)
    mealDiv5.appendChild(mealDivPrice5)
    //pastas

    //meal6
    const mealDiv6 = document.createElement('div');
    const mealDivName6 = document.createElement('p')
    const mealDivDesc6 = document.createElement('p')
    const mealDivPrice6 = document.createElement('p')

    mealDiv6.setAttribute('class', 'meal-div')
    mealDivName6.setAttribute('class', 'meal-div-name')
    mealDivDesc6.setAttribute('class', 'meal-div-desc')
    mealDivPrice6.setAttribute('class', 'meal-div-price')

    mealDivName6.textContent = `Quattro al Forno`
    mealDivDesc6.textContent = `Cheese Manicotti, Chicken Cannelloni, Cheese Ravioli & Stuffed Shells`
    mealDivPrice6.textContent = `19.99`

    pastas.appendChild(mealDiv6);
    mealDiv6.appendChild(mealDivName6)
    mealDiv6.appendChild(mealDivDesc6)
    mealDiv6.appendChild(mealDivPrice6)

    //meal 7
    const mealDiv7 = document.createElement('div');
    const mealDivName7 = document.createElement('p')
    const mealDivDesc7 = document.createElement('p')
    const mealDivPrice7 = document.createElement('p')

    mealDiv7.setAttribute('class', 'meal-div')
    mealDivName7.setAttribute('class', 'meal-div-name')
    mealDivDesc7.setAttribute('class', 'meal-div-desc')
    mealDivPrice7.setAttribute('class', 'meal-div-price')

    mealDivName7.textContent = `Chicken Cannelloni`
    mealDivDesc7.textContent = `Spinach pasta tubes filled with chicken, ricotta & mozzarella with rosa sauce`
    mealDivPrice7.textContent = `19.99`

    pastas.appendChild(mealDiv7);
    mealDiv7.appendChild(mealDivName7)
    mealDiv7.appendChild(mealDivDesc7)
    mealDiv7.appendChild(mealDivPrice7)

    //meal 8
    const mealDiv8 = document.createElement('div');
    const mealDivName8 = document.createElement('p')
    const mealDivDesc8 = document.createElement('p')
    const mealDivPrice8 = document.createElement('p')

    mealDiv8.setAttribute('class', 'meal-div')
    mealDivName8.setAttribute('class', 'meal-div-name')
    mealDivDesc8.setAttribute('class', 'meal-div-desc')
    mealDivPrice8.setAttribute('class', 'meal-div-price')

    mealDivName8.textContent = `Ravioli with Meat Sauce`
    mealDivDesc8.textContent = `Cheese-filled ravioli with our savory meat sauce`
    mealDivPrice8.textContent = `19.99`

    pastas.appendChild(mealDiv8);
    mealDiv8.appendChild(mealDivName8)
    mealDiv8.appendChild(mealDivDesc8)
    mealDiv8.appendChild(mealDivPrice8)

    //meal 9
    const mealDiv9 = document.createElement('div');
    const mealDivName9 = document.createElement('p')
    const mealDivDesc9 = document.createElement('p')
    const mealDivPrice9 = document.createElement('p')

    mealDiv9.setAttribute('class', 'meal-div')
    mealDivName9.setAttribute('class', 'meal-div-name')
    mealDivDesc9.setAttribute('class', 'meal-div-desc')
    mealDivPrice9.setAttribute('class', 'meal-div-price')

    mealDivName9.textContent = `Penne Basilica`
    mealDivDesc9.textContent = `Chicken breast, broccoli, Parmesan & pesto cream sauce`
    mealDivPrice9.textContent = `19.99`

    pastas.appendChild(mealDiv9);
    mealDiv9.appendChild(mealDivName9)
    mealDiv9.appendChild(mealDivDesc9)
    mealDiv9.appendChild(mealDivPrice9)

    //meal 10
    const mealDiv10 = document.createElement('div');
    const mealDivName10 = document.createElement('p')
    const mealDivDesc10 = document.createElement('p')
    const mealDivPrice10 = document.createElement('p')

    mealDiv10.setAttribute('class', 'meal-div')
    mealDivName10.setAttribute('class', 'meal-div-name')
    mealDivDesc10.setAttribute('class', 'meal-div-desc')
    mealDivPrice10.setAttribute('class', 'meal-div-price')

    mealDivName10.textContent = `Shrimp Fra Diavolo`
    mealDivDesc10.textContent = `Chicken breast, artichoke hearts, sun-dried tomatoes & peas in white wine cream sauce`
    mealDivPrice10.textContent = `19.99`

    pastas.appendChild(mealDiv10);
    mealDiv10.appendChild(mealDivName10)
    mealDiv10.appendChild(mealDivDesc10)
    mealDiv10.appendChild(mealDivPrice10)
}
