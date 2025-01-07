document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            lightbox.classList.add("active");
            const img = document.createElement("img");
            img.src = item.src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });
});
function updateTime() {
    const timeElement = document.getElementById("current-time");
    const now = new Date();
    const formattedTime = now.toLocaleTimeString("zh-Hant", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    timeElement.textContent = `${formattedTime}`;
}


setInterval(updateTime, 1000);


updateTime();
