export const loadInitialPage = () => {
    const content = document.querySelector('#content');
    const page1 = document.createElement('div');
    
    const heroDiv = document.createElement('div');
    const headline = document.createElement('h1');
    const headlineIntro = document.createElement('p');
    const heroCopy = document.createElement('p');
    
    const about = document.createElement('div');
    const aboutHeader = document.createElement('h1');
    const aboutCopyDiv = document.createElement('div');
    const aboutCopyHeader1 = document.createElement('h6');
    const aboutCopyHeader2 = document.createElement('h6');
    const aboutCopyHeader3 = document.createElement('h6');
    const aboutCopyHeader4 = document.createElement('h6');
    const aboutCopy1 = document.createElement('p')
    const aboutCopy2 = document.createElement('p')
    const aboutCopy3 = document.createElement('p')
    const aboutCopy4 = document.createElement('p')
    const aboutImage = document.createElement('div');

    about.setAttribute('id', 'about');
    aboutHeader.setAttribute('id', 'about-header')
    aboutCopyDiv.setAttribute('id', 'about-copy-div');
    aboutCopyHeader1.setAttribute('class', 'about-copy-header')
    aboutCopyHeader2.setAttribute('class', 'about-copy-header')
    aboutCopyHeader3.setAttribute('class', 'about-copy-header')
    aboutCopyHeader4.setAttribute('class', 'about-copy-header')
    aboutCopy1.setAttribute('class', 'about-copy')
    aboutCopy2.setAttribute('class', 'about-copy')
    aboutCopy3.setAttribute('class', 'about-copy')
    aboutCopy4.setAttribute('class', 'about-copy')
    aboutImage.setAttribute('id', 'about-image')

    page1.setAttribute('id', 'page1');
    heroDiv.setAttribute('id', 'hero-div')
    headline.setAttribute('id', 'headline')
    headlineIntro.setAttribute('id', 'headline-intro')
    heroCopy.setAttribute('id', 'hero-copy')
    
    headlineIntro.textContent = `Welcome to`
    headline.textContent = `Little Sicily`
    heroCopy.textContent = `We're not Italian... We're Sicilian`
    
    aboutHeader.textContent = `About`
    
    aboutCopyHeader1.textContent = `About Us`
    aboutCopyHeader2.textContent = `Our Story`
    aboutCopyHeader3.textContent = `Sicilian Culinary Heritage`
    aboutCopyHeader4.textContent = `Our Menu`
    aboutCopy1.textContent =  `Welcome to Dimaggio's, your passport to an authentic Sicilian culinary journey in the heart of New York. Nestled in the vibrant Italian food scene of our city, we take immense pride in bringing the rich flavors and warm hospitality of Sicily to your table.`
    aboutCopy2.textContent =  `At Dimaggio's, our story is rooted in a deep love for the traditions of Italian cuisine, particularly the bold and flavorful dishes of Sicily. Our journey began with a passionate chef's dream to share the authentic tastes of his homeland with the world. From our humble beginnings as a family-run trattoria, we've grown into a beloved restaurant, cherished by locals and sought after by those who appreciate genuine Italian fare.`
    aboutCopy3.textContent =  `Sicilian cuisine is a tantalizing fusion of Mediterranean flavors, influenced by centuries of diverse cultural influences, from Greek and Roman to Arab and Norman. Our kitchen pays homage to these historical connections while crafting dishes that showcase the island's distinctive ingredients. From the citrus groves of Catania to the seafood-rich waters of the Mediterranean, each ingredient is carefully selected to bring a piece of Sicily to your plate.`
    aboutCopy4.textContent =  `Prepare your taste buds for an unforgettable journey through our menu. Our chefs artfully prepare dishes that capture the essence of Sicilian cuisine, with an emphasis on freshness and quality. From the classic arancini and pasta alla norma to our mouthwatering seafood creations and delectable cannoli for dessert, every dish is a tribute to the flavors of Sicily.`

    content.appendChild(page1);
    page1.appendChild(heroDiv);
    heroDiv.appendChild(headlineIntro)
    heroDiv.appendChild(headline);
    heroDiv.appendChild(heroCopy);
    page1.appendChild(about);
    about.appendChild(aboutHeader)
    about.appendChild(aboutCopyDiv)
    about.appendChild(aboutImage)
    aboutCopyDiv.appendChild(aboutCopyHeader1)
    aboutCopyDiv.appendChild(aboutCopy1)
    aboutCopyDiv.appendChild(aboutCopyHeader2)
    aboutCopyDiv.appendChild(aboutCopy2)
    aboutCopyDiv.appendChild(aboutCopyHeader3)
    aboutCopyDiv.appendChild(aboutCopy3)
    aboutCopyDiv.appendChild(aboutCopyHeader4)
    aboutCopyDiv.appendChild(aboutCopy4)
    
}
