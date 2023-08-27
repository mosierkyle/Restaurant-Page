export const loadContactPage = () => {
    const content = document.querySelector('#content');
    const page3 = document.createElement('div');
    const info = document.createElement('div');
    const map =  document.createElement('div');

    const contactUs =  document.createElement('div');
    const constactUsHeader = document.createElement('h3');
    const address =  document.createElement('p');
    const telephone =  document.createElement('p');
    const email =  document.createElement('p');
    const hours = document.createElement('div');
    const hoursHeader = document.createElement('h3');
    const weekHours = document.createElement('p');
    const saturdayHours = document.createElement('p');
    const sundayHours = document.createElement('p');

    content.appendChild(page3);
    page3.appendChild(info);
    page3.appendChild(map);
    info.appendChild(contactUs);
    info.appendChild(hours);
    contactUs.appendChild(constactUsHeader);
    contactUs.appendChild(address);
    contactUs.appendChild(telephone);
    contactUs.appendChild(email);
    hours.appendChild(hoursHeader)
    hours.appendChild(weekHours);
    hours.appendChild(saturdayHours);
    hours.appendChild(sundayHours);

    page3.setAttribute('id', 'page3');
    map.setAttribute('id', 'map');
    info.setAttribute('id', 'info')
    contactUs.setAttribute('id', 'contact-us')
    hours.setAttribute('id', 'hours')
    constactUsHeader.setAttribute('id', 'contact-us-header')
    address.setAttribute('class', 'contact-item');
    email.setAttribute('class', 'contact-item');
    telephone.setAttribute('class', 'contact-item');
    hoursHeader.setAttribute('id', 'hours-header')
    weekHours.setAttribute('class', 'contact-item');
    saturdayHours.setAttribute('class', 'contact-item');
    sundayHours.setAttribute('class', 'contact-item');

    constactUsHeader.textContent = "Contact Us";
    hoursHeader.textContent = "Hours";
    address.textContent = `44 Canal Center Plaza #200, New York, NY 22314, USA`;
    telephone.textContent = `555.836.5245`;
    email.textContent = `mosierkyle@gmail.com`;
    weekHours.textContent = `WeekDays: 11:00 am - 7:00 pm`
    saturdayHours.textContent = `Saturday: 11:00 am - 5:00 pm`
    sundayHours.textContent = `Sunday: 1:00 pm - 5:00 pm`   
}