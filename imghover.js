const imgWrap = document.querySelectorAll(".all_movies .img_wrap");

imgWrap.forEach((img, index) => {
    img.addEventListener("mouseenter", () => {
        const posterImgs = document.querySelectorAll(".all_movies .poster_img");
        posterImgs[index].style.transform = "scale(1.1)";
    });

    img.addEventListener("mouseleave", () => {
        const posterImgs = document.querySelectorAll(".all_movies .poster_img");
        posterImgs[index].style.transform = "scale(1.0)";
    });
});
