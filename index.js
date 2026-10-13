let totalmission =0;
let completedmission =0;

function statsupdater(){
    pendingmission = totalmission - completedmission;

    document.getElementById("totval").textContent = totalmission;
    document.getElementById("comval").textContent = completedmission;
    document.getElementById("penval").textContent = pendingmission;
}
let addbutton = document.getElementById("addtask");
let inputbox = document.getElementById("taskinput");
let tasklist = document.getElementById("tasklist");

addbutton.onclick = function(){
    let tasktext = inputbox.value;

    if(tasktext==""){
        return;
    }

    let li = document.createElement("li");

    let checkcircle = document.createElement("div");
    checkcircle.className="checkcircle";
    
    let textSpan = document.createElement("span");
    textSpan.textContent = tasktext;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deletebtn";

    checkcircle.onclick = function(){
        li.classList.toggle("done");
        if(li.classList.contains("done")){
            completedmission++;
        }
        else{
            completedmission--;
        }
        statsupdater();
    }

    deleteBtn.onclick = function(){
        if(li.classList.contains("done")){
            completedmission--;
        }
        totalmission--;
        li.remove();
        statsupdater();
    }
    li.appendChild(checkcircle);
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    
    tasklist.appendChild(li);
    inputbox.value = ""; 
    totalmission++;
    statsupdater();
}

let colorbutton = document.getElementById("colorch");

let bgcolors =["aliceblue","lavenderblush", "mintcream","seashell","honeydew"];
let colorIndex =0;

colorbutton.onclick = function(){
    colorIndex++;

    if(colorIndex>=bgcolors.length){
        colorIndex=0;
    }
    document.body.style.backgroundColor = bgcolors[colorIndex];
}
