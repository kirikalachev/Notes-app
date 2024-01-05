function openBtn(event) {
    const noteContainer = event.target.closest(".note-container");

    if (noteContainer) {
        const currentScale = parseFloat(noteContainer.style.transform.replace("scale(", "").replace(")", ""));
        const newScale = currentScale === 1 ? 1.5 : 1;
        noteContainer.style.transform = `scale(${newScale})`;
        noteContainer.style.transformOrigin = "left";
    }
}

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("open-button")) {
        openBtn(event);
    }
});
