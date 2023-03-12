
let listItems = document.querySelector('.divAddList');
let arrayItems = [];
let alertBtn = document.querySelector('.alertButton');

alertBtn.addEventListener('click', alertFunction);

function addItem(){
    let li = document.createElement('p');
    li.innerHTML = 'test';
    arrayItems.push(li.innerText)
    listItems.appendChild(li);
    console.log(arrayItems);
}

function alertFunction(){
    alert(arrayItems)
}

addItem();