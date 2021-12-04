
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];


// - З масиву users за допомогою циклу витягнути адреси користувачів
// і записати (скопіювати) їх в інший порожній масив.
//
// let arr = [];
// for (const user of users) {
//     arr.push(user.address)
// }
// console.log(arr);


// - За допомоги циклу проітерувати  масив users,
// записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// for (const user of users) {
//     let div = document.createElement('div');
//     div.innerText = `${user.name} ${user.age} ${user.status} `
//     document.body.appendChild(div);
// }




// - За допомоги циклу проітерувати  масив users,
// записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     const div = document.createElement("div");
//     const h3 = document.createElement("h3");
//     const p = document.createElement("p");
//     const p1 = document.createElement("p");
//     let address = ``;
//     for (const address1 in user.address) {
//         address = address + "  " + user.address[address1];
//     }
//     h3.innerText = user.name;
//     p.innerText = user.age;
//     p1.innerText = address;
//     div.append(h3,p,p1);
//     document.body.appendChild(div);
// };





// - За допомоги циклу проітерувати  масив users,
// записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам ,
// блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
//  for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     const div = document.createElement("div");
//     const name = document.createElement("h3");
//     const age = document.createElement("p");
//     const status = document.createElement("p");
//     const address = document.createElement("div");
//     for (const item in user.address) {
//         const temp = document.createElement("div");
//         temp.innerHTML = user.address[item];
//          address.appendChild(temp);
//     }
//     name.innerText = user.name;
//     age.innerText = user.age;
//     status.innerText = user.status;
//
//     div.appendChild(name);
//     div.appendChild(age);
//     div.appendChild(status);
//     div.appendChild(address);
//     document.body.appendChild(div);
// };









// - є сторінка rules.html.
// Контентом сторінки є заголовки та параграфи. Заголовки (h2)
// характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить
//     в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// let arr = document.getElementsByTagName('h2');
// let content = document.getElementById('content');
// let ul= document.createElement('ul');
// for(let h2 of arr){
//     let li = document.createElement('li');
//     li.innerText=h2.innerText;
//     ul.appendChild(li)
// }
// content.appendChild(ul);









let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив,
// та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
//  const wrap= document.createElement('div');
// wrap.id= 'wrap';
// for( let i=0; i<rules.length; i++){
// 	const rule = rules[i];
// 	const div = document.createElement('div');
// 	const h2 = document.createElement('h2');
// 	const p = document.createElement('p');
// 	div.className= `rules rule ${i+1}`;
// 	h2.innerText=rule.title;
// 	p.innerText= rule.body;
// 	div.appendChild(h2)
// 	div.appendChild(p)
// wrap.appendChild(div);
// }
// document.body.appendChild(wrap);
