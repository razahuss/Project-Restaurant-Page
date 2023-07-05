
const menuPage = (content) => {
    const menuTitleDiv = document.createElement('div');
    menuTitleDiv.classList.add('menu-title');
    menuTitleDiv.innerHTML = "Menu";
    content.appendChild(menuTitleDiv);

    const beveragesTitle = document.createElement('div');
    beveragesTitle.classList.add('menu-type-title');
    beveragesTitle.innerHTML = 'Beverages';
    content.appendChild(beveragesTitle);

    //content for menu item
    const bevDiv1 = document.createElement('div');
    bevDiv1.classList.add('menu-item');
    content.appendChild(bevDiv1);

    const bevDes1 = document.createElement('p');
    bevDes1.innerHTML = 'Coffee </br> Coffee is a popular caffeinated beverage made from roasted coffee beans, known for its rich aroma and stimulating effects.</br>$4.99';
    bevDiv1.appendChild(bevDes1);

    const divForImg1 = document.createElement('div');
    divForImg1.classList.add('div-img');
    bevDiv1.appendChild(divForImg1);

    const bevImg1 = document.createElement('img');
    bevImg1.src = '/home/rhuss121/repos/Project-Restaurant-Page/src/imgs/coffee.jpg';
    divForImg1.appendChild(bevImg1);
    //end content for menu item

    //content for menu item
    const bevDiv2 = document.createElement('div');
    bevDiv2.classList.add('menu-item');
    content.appendChild(bevDiv2);

    const bevDes2 = document.createElement('p');
    bevDes2.innerHTML = 'Orange Juice</br>Orange juice is a refreshing and tangy citrus beverage made by extracting the juice from oranges, known for its bright flavor and high vitamin C content.</br>$2.99';
    bevDiv2.appendChild(bevDes2);

    const divForImg2 = document.createElement('div');
    divForImg2.classList.add('div-img');
    bevDiv2.appendChild(divForImg2);

    const bevImg2 = document.createElement('img');
    bevImg2.src = '/home/rhuss121/repos/Project-Restaurant-Page/src/imgs/delicious-glass-orange-juice.jpg';
    divForImg2.appendChild(bevImg2);
    //end content for menu item

    const sidesTitle = document.createElement('div');
    sidesTitle.classList.add('menu-type-title');
    sidesTitle.innerHTML = 'Sides';
    content.appendChild(sidesTitle);

    //content for menu item
    const sideDiv1 = document.createElement('div');
    sideDiv1.classList.add('menu-item');
    content.appendChild(sideDiv1);

    const sideDes1 = document.createElement('p');
    sideDes1.innerHTML = 'Fries</br>Fries, also known as French fries or chips, are crispy and golden potato sticks that are popular as a savory side dish or snack.</br>$3.99';
    sideDiv1.appendChild(sideDes1);

    const sidedivForImg1 = document.createElement('div');
    sidedivForImg1.classList.add('div-img');
    sideDiv1.appendChild(sidedivForImg1);

    const sideImg1 = document.createElement('img');
    sideImg1.src = '/home/rhuss121/repos/Project-Restaurant-Page/src/imgs/french-fries.jpg';
    sidedivForImg1.appendChild(sideImg1);
    //end content for menu item

    //content for menu item
    const sideDiv2 = document.createElement('div');
    sideDiv2.classList.add('menu-item');
    content.appendChild(sideDiv2);

    const sideDes2 = document.createElement('p');
    sideDes2.innerHTML = 'Coleslaw</br>Coleslaw is a classic side dish consisting of shredded cabbage and carrots, dressed with a creamy or vinegar-based dressing, offering a crisp and refreshing accompaniment to various meals.</br>$1.99';
    sideDiv2.appendChild(sideDes2);

    const sidedivForImg2 = document.createElement('div');
    sidedivForImg2.classList.add('div-img');
    sideDiv2.appendChild(sidedivForImg2);

    const sideImg2 = document.createElement('img');
    sideImg2.src = '/home/rhuss121/repos/Project-Restaurant-Page/src/imgs/coleslaw.jpg';
    sidedivForImg2.appendChild(sideImg2);
    //end content for menu item

    const mainCourseTitle = document.createElement('div');
    mainCourseTitle.classList.add('menu-type-title');
    mainCourseTitle.innerHTML = 'Main Course';
    content.appendChild(mainCourseTitle);

    //content for menu item
    const mainDiv1 = document.createElement('div');
    mainDiv1.classList.add('menu-item');
    content.appendChild(mainDiv1);

    const mainDes1 = document.createElement('p');
    mainDes1.innerHTML = 'Chicken Burger</br>A chicken burger is a delicious sandwich made with a breaded or grilled chicken patty, typically served in a bun and topped with various condiments.</br>$7.99';
    mainDiv1.appendChild(mainDes1);

    const maindivForImg1 = document.createElement('div');
    maindivForImg1.classList.add('div-img');
    mainDiv1.appendChild(maindivForImg1);

    const mainImg1 = document.createElement('img');
    mainImg1.src = '/home/rhuss121/repos/Project-Restaurant-Page/src/imgs/chickenburger.jpg';
    maindivForImg1.appendChild(mainImg1);
    //end content for menu item

    //content for menu item
    const mainDiv2 = document.createElement('div');
    mainDiv2.classList.add('menu-item');
    content.appendChild(mainDiv2);

    const mainDes2 = document.createElement('p');
    mainDes2.innerHTML = 'Pasta</br>Pasta is a versatile Italian staple made from durum wheat or other grains, commonly enjoyed in various shapes and sizes, and served with a variety of sauces, making it a comforting and satisfying dish.</br>$10.99';
    mainDiv2.appendChild(mainDes2);

    const maindivForImg2 = document.createElement('div');
    maindivForImg2.classList.add('div-img');
    mainDiv2.appendChild(maindivForImg2);

    const mainImg2 = document.createElement('img');
    mainImg2.src = '/home/rhuss121/repos/Project-Restaurant-Page/src/imgs/pasta.jpg';
    maindivForImg2.appendChild(mainImg2);
    //end content for menu item
}

export{
    menuPage
};