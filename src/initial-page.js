export const loadInitialPage = () => {
    const content = document.querySelector('#content');
    const page1 = document.createElement('div');
    
    const heroDiv = document.createElement('div');
    const headline = document.createElement('h1');
    const heroCopy = document.createElement('p');
    
    const about = document.createElement('div');
    const aboutHeader = document.createElement('h1');
    const aboutImage = document.createElement('div');



    page1.setAttribute('id', 'page1');
    heroDiv.setAttribute('id', 'hero-div')
    headline.setAttribute('id', 'headline')
    heroCopy.setAttribute('id', 'hero-copy')
    
    headline.textContent = `Little Sicily`
    heroCopy.textContent = `We're not Italian... We're Sicilian `

    content.appendChild(page1);
    page1.appendChild(heroDiv);
    heroDiv.appendChild(headline);
    heroDiv.appendChild(heroCopy)
}


