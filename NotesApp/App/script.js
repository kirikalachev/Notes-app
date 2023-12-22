const notes = document.querySelector(".notes");
const createBtn = document.querySelector(".create-note");
let note = document.querySelectorAll(".note-container");
let inputText = document.querySelector(".input-box");
let inputHeading = document.querySelector(".inputHeading");

function showNotes() {
    notes.innerHTML = localStorage.getItem("note");
    note.innerHTML = localStorage.getItem("inputText");
    note.innerHTML = localStorage.getItem("inputHeading");
}

showNotes();

function updateStorage() {
    localStorage.setItem("note", notes.innerHTML);
    localStorage.setItem("inputText", note.innerHTML);
    localStorage.setItem("inputHeading", note.innerHTML);
}

createBtn.addEventListener("click", ()=> {
    let note = document.createElement("div");
    note.className = "note-container";

    let inputBox = document.createElement("textarea");
    inputBox.className = "input-box";

    let inputHeading = document.createElement("input");
    inputHeading.className = "inputHeading";
    inputHeading.type = "text";

    let deleteBtn = document.createElement("img");
    deleteBtn.src = "delete.png";
    deleteBtn.className = "deleteImg";
    deleteBtn.title = "Delete";
    
    let openBtn = document.createElement("button");
    openBtn.className = "open-button";
    openBtn.title = "Open and Edit";
    openBtn.innerHTML = "Open<img src='open.png' class='openImg'>";

    note.appendChild(openBtn);
    note.appendChild(inputBox);
    note.appendChild(inputHeading);
    note.appendChild(deleteBtn);

    notes.appendChild(note);
});

notes.addEventListener("keyup", function (e) {
    const target = e.target;
    if (target.className === "deleteImg") {
        target.parentelement.remove();
        updateStorage();
    }

    else {
        updateStorage();
    }
});
/*
notes.addEventListener("click", function (e) {
    if (e.target.className === "deleteImg") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.className === "inputHeading") {
        note.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        });
    }
}); */