function addRandomElements() {
    const allList = document.getElementById("all_movies");
    if (allList) {
        const liElements = allList.getElementsByTagName("li");
        const recoMoviesUl = document.querySelector(".recommended_movies ul");
        const liNumber = 5;
        const selectedIndices = []; // 이미 선택된 인덱스를 기록하는 배열

        for (let i = 0; i < liNumber; i++) {
            let randomIndex;

            // 이미 선택된 인덱스가 아닌 랜덤한 인덱스 선택
            do {
                randomIndex = Math.floor(Math.random() * liElements.length);
            } while (selectedIndices.includes(randomIndex));

            console.log(randomIndex);
            const randomElement = liElements[randomIndex].cloneNode(true);
            recoMoviesUl.appendChild(randomElement);

            // 선택된 인덱스 기록
            selectedIndices.push(randomIndex);
        }
    }
}
