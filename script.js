body { font family: Arial, sans-serif; }
document.addEventListener("DOMContentLoaded", function () {
    console.log("Страница загружена! Привет от script.js!");

    // Добавляем обработчик события на кнопку (если она есть)
    const button = document.querySelector("#myButton");
    if (button) {
        button.addEventListener("click", function () {
            alert("Вы нажали на кнопку!");
        });
    }
});