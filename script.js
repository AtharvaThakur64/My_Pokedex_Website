// JavaScript for modal functionality
function openModal(imageSrc, name, type) {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalType = document.getElementById("modalType");

    modalImage.src = imageSrc;
    modalTitle.textContent = name;
    modalType.textContent = type;

    modal.style.display = "block";
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// JavaScript for search functionality
document.getElementById("searchBox").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const allPokemonDivs = document.querySelectorAll(".image-container div");

    allPokemonDivs.forEach(div => {
        const pokemonName = div.querySelector("p").textContent.toLowerCase();
        if (pokemonName.includes(searchTerm)) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });
});
