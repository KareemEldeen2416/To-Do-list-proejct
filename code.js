

const documentFragment = document.createDocumentFragment();
const listArea = document.getElementById('workArea');
const newNoteButton = document.getElementById('newNote');
const newListButton = document.getElementById('newList');
let listsID = [1];
let notesID = [1];




//Action to add a new note
newNoteButton.addEventListener("click" , ()=>{
    console.log("done");
    const newNote = document.createElement('div');
    newNote.setAttribute('class' , 'note');
    const noteTitle = document.createElement("input");
    noteTitle.setAttribute('class' , 'noteTitle');
    noteTitle.setAttribute('placeholder' , "Enter note title here");
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
    const newID = listsID[listsID.length-1] + 1;
    listsID.push(newID);
    let colors  = ['yellow' , 'blue' , 'purple' , 'pink' , 'grey'];
    let colorsValues = ['#fdf3b1','#8ecdef' ,'rgba(189, 130, 244, 0.83)','#fdbef6','#dadadb' ];
    console.log('new list added');
    //create the body of the list
    const newList = document.createElement('div');
    newList.setAttribute('class' , 'note');
    newList.setAttribute('id' , newID);
    //create title of the list
    const listTitle = document.createElement('input');
    listTitle.setAttribute('type' , 'text');
    listTitle.setAttribute('class' , 'noteTitle');
    listTitle.setAttribute('placeholder' , 'list title');

    //create add button
    const addButton = document.createElement('button');
    addButton.setAttribute('class' , 'addNote');
    addButton.textContent = '+';
    addButton.addEventListener('click' , ()=>{
        const selectedList = document.getElementsByClassName(newID);
        
        //create a new task
        const newTask = document.createElement('li');
        const newTaskBody = document.createElement('div');
        const newCheckBox = document.createElement('input');
        newCheckBox.setAttribute('type' , 'checkbox');
        newTaskBody.appendChild(newCheckBox);
        const newTaskTitle = document.createElement('input');
        newTaskTitle.setAttribute('type' , 'text');
        newTaskTitle.setAttribute('class' , 'noteContent');
        newTaskTitle.setAttribute('placeholder' , 'Task here')
        newTaskBody.appendChild(newTaskTitle);
        newTask.appendChild(newTaskBody);
        selectedList[0].appendChild(newTask);

        
    });

    //appending list title, and add button to the body of the list
    newList.appendChild(listTitle);
    newList.appendChild(addButton);

    //create break, and adding it to the body
    const breaker = document.createElement('br');
    newList.appendChild(breaker);

    //create body of color list
    const colorList = document.createElement('div');
    colorList.setAttribute('class' , 'colorList');

    //adding colors to the body of color list
    for(let i = 0 ; i < colors.length ; i++){
        const newColor = document.createElement('button');
        newColor.setAttribute('class' , 'box '+colors[i]);
        //Add event to change color
        newColor.addEventListener('click' , ()=>{
            document.getElementById(newID).style.backgroundColor = colorsValues[i];
        });
        colorList.appendChild(newColor);
    }

    //adding color list to the body of the list
    newList.appendChild(colorList);

    //create task list
    const taskList = document.createElement('ul');
    taskList.setAttribute('class' , 'checkList '+newID);
    

    //create an initial task
    const task = document.createElement('li');
    const taskbody = document.createElement('div');
    const check = document.createElement('input');
    check.setAttribute('type' , 'checkbox');
    const taskTitle = document.createElement('input');
    taskTitle.setAttribute('type' , 'text');
    taskTitle.setAttribute('class' , 'noteContent');
    taskTitle.setAttribute('placeholder' , 'Task here')
    taskbody.appendChild(check);
    taskbody.appendChild(taskTitle);
    task.appendChild(taskbody);
    taskList.appendChild(task);

    //append task list to the body of the list
    newList.appendChild(taskList);
    

    documentFragment.appendChild(newList);
    listArea.appendChild(documentFragment);
});