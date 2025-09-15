const accordions = document.querySelectorAll(".accordion-header")

accordions.forEach((btn) => {
    btn.addEventListener("click", () => {
        accordions.forEach((el) => {
            if (el !== btn) {
                el.classList.remove("active")
                el.nextElementSibling.style.maxHeight = null
            }
        });

        btn.classList.toggle("active")
        const content = btn.nextElementSibling
        if (btn.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px"
        } else {
            content.style.maxHeight = null
        }
    });
});

if (window.location.pathname.includes("academicBackground")) {
    const firstAccordion = document.querySelector(".accordion-header")
    if (firstAccordion) {
        firstAccordion.classList.add("active")
        const content = firstAccordion.nextElementSibling;
        content.style.maxHeight = content.scrollHeight + "px"
    }
}