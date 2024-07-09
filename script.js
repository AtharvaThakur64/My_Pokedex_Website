
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

// search functionality
document.getElementById("searchBox").addEventListener("input", function() {
    filterPokemon();
});

document.getElementById("filterBox").addEventListener("change", function() {
    filterPokemon();
});
// filter function
function filterPokemon() {
    const searchTerm = document.getElementById("searchBox").value.toLowerCase();
    const filterType = document.getElementById("filterBox").value.toLowerCase();
    const allPokemonDivs = document.querySelectorAll(".image-container div");

    allPokemonDivs.forEach(div => {
        const pokemonName = div.querySelector("p").textContent.toLowerCase();
        const pokemonType = div.querySelector(".pokemon-type").textContent.toLowerCase();

        if ((pokemonName.includes(searchTerm) || searchTerm === '') && (pokemonType.includes(filterType) || filterType === '')) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });
}
