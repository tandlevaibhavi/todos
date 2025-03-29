let todoItemsContainer=document.getElementById("todoItemsContainer");
let todoList =[{
    text:"Learn HTML",
    uniqueNo: 1

},
{
    text:"Learn CSS",
    uniqueNo: 2
},
{
    text:"Learn JS",
    uniqueNo: 3
}];
let todoCount = todoList.length;
function onToDoStatusChanged(checkboxId,labelId){
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement=document.getElementById(labelId);
    
        labelElement.classList.toggle("checked")
    
   
}
function onDeleteToDo(todoId){
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement)
}
function createAndAppendTodo(elements){
    let checkboxId="checkbox"+elements.uniqueNo;
    //labelid
    let labelId="label"+elements.uniqueNo;
    let todoId = "todo"+elements.uniqueId;

//li element 
let todoElement = document.createElement('li')
todoElement.classList.add("todo-item-container","d-flex","flex-row")
todoElement.id = todoId; 
//todocontainer
todoItemsContainer.append(todoElement)
//input element
let inputElement = document.createElement("input")
inputElement.type="checkbox"
inputElement.id=checkboxId;
inputElement.classList.add("checkbox-input")
inputElement.onclick=function(){
    onToDoStatusChanged(checkboxId,labelId);
}
todoElement.appendChild(inputElement)
//label contianer
let labelcontainer = document.createElement("div");
labelcontainer.classList.add("label-container","d-flex","flex-row");
todoElement.appendChild(labelcontainer)
//label checkbox element 
let labelElement = document.createElement("label")
labelElement.setAttribute("for",checkboxId)
labelElement.classList.add("checkbox-label")
labelElement.textContent=elements.text;
labelElement.id=labelId;
labelcontainer.appendChild(labelElement)
//delete container
let deleteContainer = document.createElement("div");
deleteContainer.classList.add("delete-icon-container")
labelcontainer.appendChild(deleteContainer)
//delete icon 
let deleteIcon = document.createElement("i");
deleteIcon.classList.add('far','fa-trash-alt','delete-icon');
deleteIcon.onclick = function(){
    onDeleteToDo(todoId)
}
deleteContainer.appendChild(deleteIcon);
}
for (let todo of todoList){
createAndAppendTodo(todo); 
}
function onAddTodo(){
    let userInputElement=document.getElementById("todoUserInput")
    let userInputvalue = userInputElement.value ;
    todoCount = todoCount +1;
    if(userInputvalue===""){
        alert("Enter Valid Text")
        return
    }
    let newTodo ={
        text:userInputvalue,
        uniqueNo:todoCount
    }
    createAndAppendTodo(newTodo)
    userInputElement.value=""

}
let addTodoButton = document.getElementById("addTodoButton")

addTodoButton.onclick=function(){
    onAddTodo();
}
let savebutton = document.getElementById("saveTodoButton")
savebutton.onclick=function(){
    localStorage.setItem("todoList",JSON.stringify(todoList))

}
function todoListContainer(){
    let stringfieldTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringfieldTodoList);
    if(parsedTodoList === null)
    {
        return []
    }
    else{
        return parsedTodoList;
    }
    

let todoList = todoListContainer() 
}