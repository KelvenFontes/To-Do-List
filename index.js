const todoInput = document.getElementById('todoInput');
const list = document.getElementById('list');

todoInput.addEventListener('keyup', function (event){

    if(event.key != 'Enter' || event.keyCode != 13 || todoInput.value.trim() === ""){
        return;
    }

    const newContent = document.createTextNode(todoInput.value);

    // Label Creation
    const newLabel = document.createElement('label');
    newLabel.appendChild(newContent);

    //Checkbox creation
    const newCheckBox = document.createElement('input');
    newCheckBox.setAttribute('class', 'toggle');
    newCheckBox.setAttribute('type', 'checkbox');
    newCheckBox.addEventListener('change', onCompleteTodo);

    //To do line create
    const newTodo = document.createElement('li');
    newTodo.setAttribute('class', 'row');  

    newTodo.appendChild(newCheckBox);
    newTodo.appendChild(newLabel);

    list.appendChild(newTodo);

    //quando adiciona ele retira o texto
    todoInput.value = ''

});

function onCompleteTodo(event){
    if(event.srcElement.parentElement.classList.value.include('completed')){
        event.srcElement.parentElement.classList.remove('completed');
    } else {
        event.srcElement.parentElement.classList.add('completed');
    }

}

function toggleAll(){

    const listChildren = list.childNodes;

    const completedItems = [];

    listChildren.forEach(element =>{

        if(element.classList.value.includes('completed')){
            completedItems.push(completedItems);
        }

    });

    if(completedItems.length == 0){
        for (let i=0;i<listChildren.length;i++){
            listChildren[i].classList.add('completed');
            listChildren[i].childNodes[0].setAttribute('checked', true);
        }
    } else if(listChildren.length == completedItems.length){
        for (let i=0;i<listChildren.length;i++){
            listChildren[i].classList.remove('completed');
            listChildren[i].childNodes[0].setAttribute('checked', false);
        }
    } else {
        for (let i = 0; i < listChildren.length; i++) {
          if (!listChildren[i].classList.value.includes('completed')) {
            listChildren[i].classList.add('completed');
            listChildren[i].childNodes[0].setAttribute('checked', true);
          }
        }
    }
    
    listChildren.forEach(element =>{

        element.classList.add('completed');

    });

}