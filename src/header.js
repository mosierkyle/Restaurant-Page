export const loadHeader = () => {
    const header = document.querySelector('#header');

    const title = document.createElement ('h1')
    const tabs = document.createElement('div')
    const home = document.createElement('p')
    const menu = document.createElement('p')
    const contact = document.createElement('p')

    title.setAttribute('id', 'title')
    tabs.setAttribute('id', 'tabs-container')
    home.setAttribute('class', 'tab')
    menu.setAttribute('class', 'tab')
    contact.setAttribute('class', 'tab')

    title.textContent = `Greecio's`
    home.textContent = `Home`
    menu.textContent = `Menu`
    contact.textContent = `Contact`

    tabs.appendChild(home)
    tabs.appendChild(menu)
    tabs.appendChild(contact)
    header.appendChild(title)
    header.appendChild(tabs)
}

