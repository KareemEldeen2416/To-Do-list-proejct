

const documentFragment = document.createDocumentFragment();
const listArea = document.getElementById('workArea');
const newNoteButton = document.getElementById('newNote');
const newListButton = document.getElementById('newList');




//Action to add a new note
newNoteButton.addEventListener("click" , ()=>{
    console.log("done");
    const newNote = document.createElement('div');
    newNote.setAttribute('class' , 'note');
    const noteTitle = document.createElement("h3");
    noteTitle.setAttribute('class' , 'noteTitle');
    noteTitle.textContent = "Note";
    newNote.appendChild(noteTitle);
    const breaker = document.createElement('br');
    newNote.appendChild(breaker);
    const noteContent = document.createElement('textarea');
    noteContent.setAttribute('placeholder' , 'Your note here');
    newNote.appendChild(noteContent);
    documentFragment.appendChild(newNote);
    listArea.appendChild(documentFragment);
});


//Action to add a new list
newListButton.addEventListener('click', ()=>{
    console.log('new list added');
    const newList = document.createElement('div');
    newList.setAttribute('class' ,'note');
    const listTitle = document.createElement('h3');
    listTitle.textContent="To-Do";
    listTitle.setAttribute('class','listTitle');
    newList.appendChild(listTitle);
    const toDo = document.createElement('div');
    const checkList = document.createElement('ul');
    checkList.setAttribute('class' , 'checkList');
    const listItem = document.createElement('li');
    const itemContent = document.createElement('div');
    const check = document.createElement('input');
    check.setAttribute('type' , 'checkbox');
    const checkLabel = document.createElement('input');
    checkLabel.setAttribute('placeholder' , 'Task here');
    checkLabel.setAttribute('type' , 'text');
    checkLabel.setAttribute('class' , 'noteContent');
    itemContent.appendChild(check);
    itemContent.appendChild(checkLabel);
    listItem.appendChild(itemContent);
    checkList.appendChild(listItem);
    toDo.appendChild(checkList);
    const breaker = document.createElement('br');
    newList.appendChild(breaker);
    newList.appendChild(toDo);
    documentFragment.appendChild(newList);
    listArea.appendChild(documentFragment);
});