
let listItems = document.querySelector('.divAddList');
let arrayItems = [];
let alertBtn = document.querySelector('.alertButton');

let inputB = document.querySelector('.inputBox');
let inputAdd = document.querySelector('.addBtn');

inputAdd.addEventListener('click', addItem);

alertBtn.addEventListener('click', alertFunction);

function addItem(){
    let li = document.createElement('p'); 
    if(inputB.value !== "")
    {
        li.innerHTML = inputB.value;
        arrayItems.push(li.innerText)
        listItems.appendChild(li);
        console.log(arrayItems);
    }else{
        alert("Try adding text");
    }
}

function alertFunction(){
    if(inputB.value !== "")
    {
        alert(arrayItems)
    }else{
        alert("Try adding text");
    }

}