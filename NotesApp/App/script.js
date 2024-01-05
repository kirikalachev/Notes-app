const notes = document.querySelector(".notes");
const createBtn = document.querySelector(".create-note");

function showNotes() {

    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];


    notes.innerHTML = "";


    storedNotes.forEach((storedNote) => {
        const note = createNoteElement(storedNote);
        notes.appendChild(note);
    });
}

function updateStorage() {

    const allNotes = Array.from(notes.children).map((noteElement) => {
        const inputBox = noteElement.querySelector(".input-box");
        const inputHeading = noteElement.querySelector(".inputHeading");

        return {
            text: inputBox.value,
            heading: inputHeading.value,
        };
    });


    localStorage.setItem("notes", JSON.stringify(allNotes));
}

function createNoteElement(storedNote) {

    const note = document.createElement("div");
    note.className = "note-container";

    const inputBox = document.createElement("textarea");
    inputBox.className = "input-box";
    inputBox.value = storedNote.text || "";

    const inputHeading = document.createElement("input");
    inputHeading.className = "inputHeading";
    inputHeading.type = "text";
    inputHeading.value = storedNote.heading || ""; 

    const deleteBtn = document.createElement("img");
    deleteBtn.src = "delete.png";
    deleteBtn.className = "deleteImg";
    deleteBtn.title = "Delete";

    const openBtn = document.createElement("button");
    openBtn.className = "open-button";
    openBtn.title = "Open and Edit";
    openBtn.innerHTML = "Open/Close";
    openBtn.onclick = "openBtn()";


    note.appendChild(openBtn);
    note.appendChild(inputBox);
    note.appendChild(inputHeading);
    note.appendChild(deleteBtn);

    note.addEventListener("keyup", updateStorage);

    return note;
}

createBtn.addEventListener("click", () => {
    const note = createNoteElement({});
    notes.appendChild(note);
});

notes.addEventListener("click", (e) => {
    if (e.target.className === "deleteImg") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

showNotes();
