// element ID frå HTML
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("List-container");

//Function med li, alert og 

function addTask(){
    // alert pops up when inputbox is empty 
    if(inputBox.value === ''){
        alert("Ops you need too write something!");
    }
    else{
        // lager en li element no man har skreve noe og adda den 
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        //lege til span er får delete knappen
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

//check og uncheck click
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

// will be stored in the browser with data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// display data when browser is open
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();




// You wont find console.loge() in this code  ^.^ ('')