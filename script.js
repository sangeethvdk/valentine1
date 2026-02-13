function nextPage(pageNumber) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("page" + pageNumber).classList.add("active");
}

function openModal(img, text) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modalImg").src = img.src;
    document.getElementById("caption").innerText = text;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
