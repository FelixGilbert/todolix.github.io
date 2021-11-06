let todos = {}
const STORAGE_TODO = "STORAGE_TODO"


if (typeof(Storage) !== "undefined"){
    console.log("available")
}

else{
    alert("local storage is not available")
}

if( todoFromLocal = localStorage.getItem(STORAGE_TODO)){
    todos = JSON.parse(todoFromLocal)
    
    for(let key in todos){
        createList(key, todos[key])
    }
}


function syncLocalStorage(activity, item, status = false) {
    switch(activity){
        case 'ADD':
        case 'UPDATE':
            todos[item] = status
            break;
        case 'DELETE':
            delete todos[item]
            break;
        default:
            break;
    }

    console.log(todos)

    localStorage.setItem(STORAGE_TODO, JSON.stringify(todos));
    return
}



function add(){
    let todoBox = document.getElementById("todo");
    
    let input = document.querySelector(".search")
    let value = input.value
   
    if (value === ""){
        alert("You must write something")
    }
    else{
        createList(value)
    }

    syncLocalStorage("ADD", value)

}

function createList(text, status = false){

    let input = document.querySelector(".search")

    let todoBox = document.getElementById("todo");
    let isDone = (status) ? 'green' : '';
    let newTodo = `<ul class ="ul-1"><li id = "list" onclick ="strip(this)" class = '${isDone}'> ${text} </li> 
    <img src = "close-black.png" class = "close-img" onclick ="remove(this)"> </ul>`
    todoBox.insertAdjacentHTML("afterbegin", newTodo,)
    input.value = ""
}

let input = document.querySelector(".search")
input.addEventListener("keydown", function (e) {
    if(e.keyCode === 13){
        let todoBox = document.getElementById("todo");
    
        let input = document.querySelector(".search")
        let value = input.value
       
        if (value === ""){
            alert("You must write something")
        }
        else{
            createList(value)
        }
    
        syncLocalStorage("ADD", value)

    }
})


function strip(el){
    let status = el.classList.toggle("green")
    syncLocalStorage("UPDATE", el.innerText, status)
    
} 

function remove(el){
    el.parentElement.remove()
    syncLocalStorage("DELETE", el.previousElementSibling.innerText.trim())    
}




const menuBar = document.querySelector(".contain-1")
const menu = document.querySelector(".menu")
const container = document.querySelector(".container")

menu.addEventListener("click", () => {
    menuBar.classList.toggle("active")
    container.classList.toggle("aktif")
})