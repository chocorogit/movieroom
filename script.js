// 발급받은 TMDB API key
const apiKey = "c9edad1341c962f8480ff448a9795aef";
const totalPages = 2;

const allMovies = document.querySelector(".all_movies");
const allMovieCard = document.querySelectorAll(".movie_card");
const allMovieCardImg = allMovies.querySelectorAll(".movie_card .img_wrap");
// 영화 제목 배열
// 전역변수로 선언해야 함
const movieTitles = [];
// https://api.themoviedb.org/3/movie/top_rated?api_key={API_key}&language=en-US&page=1
// 웹 브라우저에서 제공되는 JavaScript의 API
// 네트워크 데이터를 비동기적으로 가져오고 보내는 데 사용
// Fetch API는 Promise 기반으로 동작

// 통신에 성공할 경우 then()을 사용하여 콜백함수를 실행
// catch()의 경우 에러가 발생했을 때
for (let page = 1; page <= totalPages; page++) {
    const url = `https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=${page}&api_key=${apiKey}`;

    // 일반적으로 설정값들만 따로 모아 하나의 객체 변수에 저장하여 많이 사용
    const options = {
        method: "GET",
    };

    const allMovieInfo = allMovies.querySelectorAll(".movie_info");
    const allMovieTitles = allMovies.querySelectorAll(".movie_name");
    const allMovieTitlesOrigin = allMovies.querySelectorAll(".movie_name_origin");
    const releaseDate = allMovies.querySelectorAll(".release_date");
    fetch(url, options)
        .then((response) => response.json())
        // 'data'는 JavaScript 객체로 파싱된 JSON 데이터
        .then((data) => {
            // 여기에서 데이터를 처리하세요.
            // TMDB API에서 한 번에 반환되는 결과 수는 기본적으로 20개로 제한
            // 80개의 데이터를 가져오기 위해서는 페이지마다 20개씩 요청을 반복해야 합니다
            data.results.forEach((movie, index) => {
                // 영화 제목
                const movieTitle = movie.title;
                movieTitles.push(movie.title);
                // 영화 원래 제목
                const originalTitle = movie.original_title;
                // 이미지 경로
                const posterPath = movie.poster_path;
                // 이미지 전체 경로
                const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
                // 줄거리
                const overview = movie.overview;
                // 평점
                const average = movie.vote_average;
                // id
                const movieId = movie.id;
                allMovieCard[index + (page - 1) * 20].setAttribute("id", movieId);
                // 이미지 태그 생성
                const posterElement = document.createElement("img");
                // 줄거리 p 태그 생성
                const overviewElement = document.createElement("p");
                // 평점 p 태그 생성
                const averageElement = document.createElement("p");
                averageElement.classList.add("movie_average");
                averageElement.innerHTML = `<span>평점</span> ${average}`;

                posterElement.classList.add("poster_img");
                posterElement.src = posterUrl;
                overviewElement.innerHTML = movie.overview ? `${overview}` : ` 내용 요약이 없습니다.`;

                // 페이지별로 인덱스 0부터 시작 수정
                allMovieTitles[index + (page - 1) * 20].innerHTML = movieTitle;
                allMovieTitlesOrigin[index + (page - 1) * 20].innerHTML = movie.original_title;
                allMovieCardImg[index + (page - 1) * 20].appendChild(posterElement);

                allMovieInfo[index + (page - 1) * 20].appendChild(overviewElement);
                allMovieTitles[index + (page - 1) * 20].parentNode.insertBefore(
                    averageElement,
                    allMovieTitles[index + (page - 1) * 20]
                );
            });
            if (page === totalPages) {
                addRandomElements();
            }
        })
        .catch((err) => console.error(err));
}

allMovieCard.forEach((movieCard) => {
    movieCard.addEventListener("click", function () {
        // 클릭한 영화 카드의 ID 가져오기
        movieId = movieCard.getAttribute("id");

        // 알림창에 영화 ID 표시
        alert(`선택한 영화의 ID: ${movieId} 입니다`);
    });
});
