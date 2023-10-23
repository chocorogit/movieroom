const searchForm = document.querySelector(".search_bar");
searchForm.addEventListener("submit", (event) => {
    const searchInput = searchForm.querySelector("input");
    const inputValue = searchInput.value;

    const filteredMovies = movieTitles.filter((title, index) => {
        // 입력한 값이 없는데 true 가 나오는 이유
        // 빈 문자열이 다른 문자열에 포함되는지 확인하면 항상 true가 반환됨
        if (title.includes(inputValue) === false) {
            console.log("일치하는 결과가 없습니다.");
        } else {
            return title.includes(inputValue);
        }
    });

    // 모든 영화 카드 숨기기
    allMovieCard.forEach((card) => {
        card.parentElement.style.display = "none";
    });

    // 필터링된 영화 카드만 보여주기
    filteredMovies.forEach((title) => {
        const index = movieTitles.indexOf(title);
        allMovieCard[index].parentElement.style.display = "block";
    });

    event.preventDefault();
});
