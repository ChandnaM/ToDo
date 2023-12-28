const inputText=document.getElementById('input-box');
const listContainer=document.querySelector('.list-container');
function addTask(){
    if(inputText.value===''){
        alert('Please write a task');
    }
    else{
        const li=document.createElement("li");
        li.innerHTML=inputText.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputText.value='';
    saveData();
}

listContainer.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask()
