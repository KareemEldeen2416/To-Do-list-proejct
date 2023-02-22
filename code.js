

const documentFragment = document.createDocumentFragment();
const listArea = document.querySelector('.collection');
const newNoteButton = document.getElementById('newNote');

function addNote(){
    const newNote = document.createElement('div');
    newNote.classList.add("note");
    documentFragment.appendChild(newNote);
    listArea.appendChild(documentFragment);
}


newNoteButton.addEventListener('click' , addNote);