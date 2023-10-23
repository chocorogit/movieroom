document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            document.querySelectorAll(".nav_li a").forEach((item) => {
                item.classList.remove("on");
            });
            this.classList.add("on");

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
            });
        }
    });
});

const scrollToTopButton = document.getElementById("scrollToTop");
window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 0) {
        header.style.position = "fixed";
    } else {
        header.style.position = "relative";
    }
    if (window.scrollY > 200) {
        scrollToTopButton.style.opacity = "1";
    } else {
        scrollToTopButton.style.opacity = "0";
    }

    const windowTop = window.scrollY;
    const navItems = document.querySelectorAll(".nav_li a");

    const sections = [document.getElementById("search_bar"), document.getElementById("recommended_movies")];
    // const headerHeight =;
    sections.forEach((section, index) => {
        if (windowTop >= section.offsetTop && windowTop < (sections[index + 1]?.offsetTop || Infinity)) {
            navItems.forEach((item) => item.classList.remove("on"));
            // console.log(navItems[index]);
            navItems[index + 1].classList.add("on");
        } else if (windowTop < sections[0].offsetTop) {
            navItems.forEach((item) => item.classList.remove("on"));
            navItems[0].classList.add("on");
        }
    });
});

scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
