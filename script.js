let tabs = Array.from(document.querySelectorAll(".tab"));
let forVar;

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => tab.classList.remove("active"));
        tab.classList.add("active");
        forVar = tab.getAttribute("data-for");
        Array.from(document.querySelectorAll(".tab-data-container > div")).forEach(tabContainer => {
            tabContainer.style.display = "none";
        });
        document.querySelector(`.${forVar}`).style.display = "block";
    })
})