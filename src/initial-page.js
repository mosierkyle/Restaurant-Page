export const loadInitialPage = () => {
    const content = document.querySelector('#content')
    const page1 = document.createElement('div')
    const heroImg = document.createElement('img')
    const headline = document.createElement('h1')
    const heroCopy = document.createElement('p')

    page1.setAttribute('id', 'page1')
    heroImg.setAttribute('src', 'https://www.magnoliastatelive.com/wp-content/uploads/sites/52/2023/04/AdobeStock_130782354.jpeg')
    headline.textContent = `Greecio's`
    heroCopy.textContent = `Welcome to Greccio's, where the heart of Italy meets the soul of flavor. Nestled in the heart of San Luis Obispo, our charming Italian restaurant is a culinary haven that transports you straight to the picturesque streets of Italy. At Greccio's, we believe in the timeless art of Italian cooking, where every dish is a masterpiece crafted with passion and tradition. Whether you're craving the rich, comforting flavors of classic pasta dishes, the enticing aroma of wood-fired pizzas, or the delicate balance of fresh seafood, our menu is a symphony of taste that will leave your palate singing. Join us for a dining experience that celebrates the essence of Italy, where every meal is a journey through the diverse regions of this beautiful country. Buon appetito!`

    content.appendChild(page1);
    page1.appendChild(headline);
    page1.appendChild(heroImg);
    page1.appendChild(heroCopy)
}


