window.onload = () => {
    const doomButton = document.getElementById("doom-button");
    doomButton.addEventListener("click", toggleDoom);
}


function toggleDoom() {
    const doom = document.getElementById("doom");
    const content = document.getElementById("content");

    if (doom.src === "about:blank") {
        doom.src = doom.dataset.src;
        doom.style.display = "block";
        content.style.display = "none";
    }
    else {
        doom.src = "about:blank";
        doom.style.display = "none";
        content.style.display = "";
    }
}
