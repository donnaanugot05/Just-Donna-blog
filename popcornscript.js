document.addEventListener("DOMContentLoaded", function () {
    const flipButtons = document.querySelectorAll(".flip-btn");

    flipButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const card = this.closest(".movie-card").querySelector(".flip-box-inner");
            card.classList.toggle("flipped");
        });

        // Hover preview
        button.addEventListener("mouseover", function () {
            this.setAttribute("title", "Click to see review");
        });
    });
});
