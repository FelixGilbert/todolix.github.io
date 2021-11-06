function add(){
    const todo = document.getElementById("todo")

    var input = document.querySelector(".search");

    var li = document.createElement("li");

    var ul = document.createElement("ul")

    var txt = document.createTextNode(input.value)
    //tambahkan tenggat waktu dengan titik 3
    var date = document.createElement("input")
    var img = document.createElement("img")
    img.src = "done.png"
    var close = document.createElement("img")
    close.src = "close-black.png"
    
    var trash = document.createElement("img")
    trash.src = "delete_black.png"
    li.appendChild(txt);
    ul.appendChild(li);
    todo.appendChild(ul);
    todo.appendChild(img);
    todo.appendChild(close);
    todo.appendChild(trash);
    trash.classList.add("delete")
    li.classList.add("list");
    ul.classList.add("ul-1")
    img.classList.add("done")
    
    close.classList.add("close-img")

    img.addEventListener("click", function(){
        li.classList.add("green")  
        li.classList.remove("list");
        li.classList.remove("red")
        img.src = "done-white.png"
        close.src = "close-white.png"
        trash.src = "delete_white.png"
    })

    close.addEventListener("click", function(){
        li.classList.add("red");
        li.classList.remove("green")
        li.classList.remove("list")
        img.src = "done-white.png"
        close.src = "close-white.png"
        trash.src = "delete_white.png"
    })
}

const menu = document.querySelector(".menu")

menu.addEventListener("click", function(){
    menu.classList.add("")
})

