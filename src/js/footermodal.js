document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.querySelector(".footer__button");
    const closeModalBtn = document.querySelector(".Vector_fotter");
    const backdrop = document.querySelector(".backdrop"); 

    if (openModalBtn) {
        openModalBtn.addEventListener("click", () => {
            backdrop.classList.remove("is-hidden");
            document.body.classList.add("no-scroll");
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            backdrop.classList.add("is-hidden");
            document.body.classList.remove("no-scroll");
        });
    }

    backdrop.addEventListener("click", (event) => {
        if (event.target === backdrop) {
            backdrop.classList.add("is-hidden");
            document.body.classList.remove("no-scroll");
        }
    });
});
