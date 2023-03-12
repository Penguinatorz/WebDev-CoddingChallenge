
let listItems = document.querySelector('.divAddList');
let arrayItems = [];


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
alertFunction();