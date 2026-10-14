let totalmission =0;
let completedmission =0;
let pendingmission =0;

function statsupdater(){
    totalmission = tasklist.children.length;
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
    tasktext=tasktext.trim();

    if(tasktext==""){
        return;
    }

    let li = document.createElement("li");

    let checkcircle = document.createElement("div");
    checkcircle.className="checkcircle";
    
    let textSpan = document.createElement("span");
    textSpan.textContent = tasktext;

    let deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.className = "deletebtn";

    function togglemission(){
        li.classList.toggle("done");
        if(li.classList.contains("done")){
            completedmission++;
        }
        else{
            completedmission--;
        }
        statsupdater();
    }
    checkcircle.onclick = togglemission;
    textSpan.onclick = togglemission;

    deletebtn.onclick = function(){
        if(li.classList.contains("done")){
            completedmission--;
        }
        
        li.remove();
        statsupdater();
    }
    li.appendChild(checkcircle);
    li.appendChild(textSpan);
    li.appendChild(deletebtn);
    
    tasklist.appendChild(li);
    inputbox.value = ""; 
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
