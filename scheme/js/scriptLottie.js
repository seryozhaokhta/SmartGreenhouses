document.addEventListener("DOMContentLoaded", function () {
  lottie.loadAnimation({
    container: document.getElementById("animation-container"), // ID HTML контейнера
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/main/mainAnimation/data.json", // Путь к файлу анимации Lottie
  });
});
