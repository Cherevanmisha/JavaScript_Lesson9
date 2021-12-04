// Все робити за допомоги js.
// - створити блок,
// let htmlDivElement = document.createElement('div');
// console.log(htmlDivElement);


//     - додати йому класи wrap, collapse, alpha, beta

// let htmlDivElement = document.createElement('div');
//
// htmlDivElement.classList.add('wrap');
// htmlDivElement.classList.add('collapse');
// htmlDivElement.classList.add('alpha');
// htmlDivElement.classList.add('beta');


// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//
// htmlDivElement.style.background = 'red';
// htmlDivElement.style.color = 'yellow';
// htmlDivElement.style.fontSize = '100px';



// - додати цей блок в body.
// document.body.appendChild(htmlDivElement);
//
// console.log(htmlDivElement);


// - клонувати його повністю, та додати клон в body.
// document.body.appendChild(htmlDivElement.cloneNode(true));



// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий
// для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
// let arr = ['Main', 'Products', 'About us', 'Contacts'];
// let elementsByClassName = document.getElementsByClassName('menu')[0];
// for (const elementsByClassNameElement of arr) {
// let ht = document.createElement('li');
//     ht.innerText = elementsByClassNameElement;
//     elementsByClassName.appendChild(ht);
//
// }








// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const courseElement of coursesAndDurationArray) {
//     let ht = document.createElement('div');
//     ht.innerText = `${courseElement.title}   ${courseElement.monthDuration}`;
//     document.body.appendChild(ht)
//
// }



//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити
//
// <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const courseElement of coursesAndDurationArray) {
//     let div = document.createElement('class');
//     div.classList.add('item');
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     let p = document.createElement('p');
//     p.classList.add('description');
//     h1.innerText = courseElement.title;
//     p.innerText = courseElement.monthDuration;
//     div.append(h1, p);
//     document.body.appendChild(div)
//
//
// }