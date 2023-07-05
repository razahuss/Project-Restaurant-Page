

const homePage = (content) => {
    const homePageTitleDiv = document.createElement('div');
    homePageTitleDiv.classList.add('homePageTitle');
    content.appendChild(homePageTitleDiv);

    const title = document.createElement('p');
    title.innerHTML = 'Fancy Restaurant';
    homePageTitleDiv.appendChild(title);

    const homePageDesDiv = document.createElement('div');
    homePageDesDiv.classList.add('des-block');
    content.appendChild(homePageDesDiv);

    const des = document.createElement('p');
    des.innerHTML = 'Welcome to Fancy Restaurant an opulent and sophisticated fine dining establishment. Immerse yourself in an ambiance of elegance, with luxurious décor, soft lighting, and impeccable attention to detail. Indulge in a symphony of exquisite flavors and artistic presentations, crafted by world-class chefs using the finest ingredients from around the world.';
    homePageDesDiv.appendChild(des);

    const hours = document.createElement('div');
    hours.classList.add('des-block');
    content.appendChild(hours);

    const timings = document.createElement('p');
    timings.innerHTML =  'hours' +'</br>'+'Sunday: 8am - 8pm'+'</br>'+'Monday: 8am - 8pm'+'</br>'+'Tuesday: 8am - 8pm'+'</br>'+'Wednesday: 8am - 8pm'+'</br>'+'Thursday: 8am - 8pm'+'</br>'+'Friday: 8am - 8pm'+'</br>'+'Saturday: 8am - 8pm';
    hours.appendChild(timings);

    const location = document.createElement('div');
    location.classList.add('des-block');
    content.appendChild(location);

    const address = document.createElement('p');
    address.innerHTML = 'Location'+'</br>'+'123 Random Place, Nowhereville, Virginia';
    location.appendChild(address);
}

export {
    homePage
};