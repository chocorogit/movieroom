const movieCards = document.querySelectorAll(".movie_card");
const movieInfos = document.querySelectorAll(".movie_info");

movieCards.forEach((card, index) => {
    card.addEventListener("mouseenter", () => {
        movieInfos[index].style.display = "block";
    });

    card.addEventListener("mouseleave", () => {
        // movieInfos[index].classList.remove("show");
        movieInfos[index].style.display = "none";
    });
});
