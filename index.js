
let listItems = document.querySelector('.divAddList');



function addItem(){
    let li = document.createElement('p');
    li.innerHTML = 'test';
    listItems.appendChild(li);
}

addItem();