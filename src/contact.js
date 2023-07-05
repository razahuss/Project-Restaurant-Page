
const contactPage = (content) => {

    const contactHeader = document.createElement('div');
    contactHeader.classList.add('contact-header');
    contactHeader.innerHTML = "Contact Us";
    content.appendChild(contactHeader);

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info')
    contactInfo.innerHTML = "Owner: Marvin Beak</br>123-456-7890</br>realEmail@email.com</br>123 Random Place, Nowhereville, Virginia"
    content.appendChild(contactInfo);
}

export{
    contactPage
};