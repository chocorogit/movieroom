// 발급받은 TMDB API key
const apiKey = "c9edad1341c962f8480ff448a9795aef";
const totalPages = 4;
// 일반적으로 설정값들만 따로 모아 하나의 객체 변수에 저장하여 많이 사용
const options = {
    // method // 사용할 메소드를 선택 (GET, POST, PUT, DELETE 등등)
    method: "GET",
    // headers: {
    //     accept: "application/json",
    //     // Authorization 헤더를 사용하여 API 키를 전달하려고 시도하고 있지만, TMDB API는 보통 api_key 쿼리 매개변수를 사용하여 인증
    //     // 따라서 Authorization 헤더를 삭제하고 요청 URL에 API 키를 추가하는 것이 더 적절
    //     Authorization: "Bearer c9edad1341c962f8480ff448a9795aef",
    // },
};
// https://api.themoviedb.org/3/movie/top_rated?api_key={API_key}&language=en-US&page=1
// 웹 브라우저에서 제공되는 JavaScript의 API
// 네트워크 데이터를 비동기적으로 가져오고 보내는 데 사용
// Fetch API는 Promise 기반으로 동작

// 통신에 성공할 경우 then()을 사용하여 콜백함수를 실행
// catch()의 경우 에러가 발생했을 때
for (let page = 1; page <= totalPages; page++) {
    const url = `https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=${page}&api_key=${apiKey}`;

    fetch(url, options)
        .then((response) => response.json())
        // 'data'는 JavaScript 객체로 파싱된 JSON 데이터
        .then((data) => {
            // 여기에서 데이터를 처리하세요.
            // TMDB API에서 한 번에 반환되는 결과 수는 기본적으로 20개로 제한
            // 80개의 데이터를 가져오기 위해서는 페이지마다 20개씩 요청을 반복해야 합니다
            data.results.forEach((movie) => {
                const movieTitle = movie.title;
                console.log(movie.title);
            });
            // data.results.slice(0, 20).forEach((movie) => {
            //     const title = movie.title || movie.name; // title 또는 name을 사용
            //     console.log(title);
            // });
        })
        .catch((err) => console.error(err));
}
// fetch API는 Request, Response, Headers라는 인터페이스를 지원합니다.
// 이를 사용하면 HTTP 요청시 더 쉽고 간단하고 값을 설정하고 전달 할 수 있습니다
