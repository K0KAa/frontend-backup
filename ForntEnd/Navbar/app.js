const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.Nav-links');
    const navLinks = document.querySelectorAll('.Nav-links li');

    burger.addEventListener("click", () => {
        nav.classList.toggle('Nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            }
            else {
                link.style.animation = `navLinksFade 0.4s ease forwards ${index / 7 + 0.4}s`;
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();