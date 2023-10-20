const apiKey = "c9edad1341c962f8480ff448a9795aef";
const totalPages = 4; // 예를 들어 4 페이지까지 데이터를 가져오려면
const url = `https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=${page}&api_key=${apiKey}`;

// 페이지별로 데이터를 가져와서 병합할 배열을 만듭니다.
const fetchDataForPage = (page) => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=${page}&api_key=${apiKey}`;
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    });
};

fetch(url).then(response.json());

// 각 페이지의 데이터를 가져오고 병합합니다.
const fetchAllData = async () => {
    let allData = [];
    for (let page = 1; page <= totalPages; page++) {
        const data = await fetchDataForPage(page);
        allData = allData.concat(data.results);
    }
    return allData;
};

fetchAllData()
    .then((data) => {
        data.forEach((movie) => {
            const movieTitle = movie.title;
            console.log(movieTitle);
        });
    })
    .catch((err) => console.error(err));
