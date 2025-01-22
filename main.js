$(document).ready(function () {
  console.log("se a actualizado el boletin");
  document
    .querySelectorAll(".contentIndice .item .cabecera button")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const cuerpo = button.closest(".item").querySelector(".cuerpo");
        cuerpo.classList.toggle("active");
        button.classList.toggle("menos");
      });
    });

  document.querySelectorAll(".cap .contenido button").forEach((button) => {
    button.addEventListener("click", () => {
      const contentTextColumn = button
        .closest(".contenido")
        .querySelector(".contentTextColumn.vermas");
      contentTextColumn.classList.toggle("active");
      button.classList.toggle("menos");
    });
  });

  document.querySelectorAll(".cap .cabecera3 button").forEach((button) => {
    button.addEventListener("click", () => {
      const contentTextColumn = button
        .closest(".cabecera3")
        .querySelector(".contentVermas");
      contentTextColumn.classList.toggle("active");
      button.classList.toggle("menos");
    });
  });

  document.querySelectorAll(".cap .lista2 .item button").forEach((button) => {
    button.addEventListener("click", () => {
      const contentTextColumn = button
        .closest(".item")
        .querySelector(".cuerpo");
      contentTextColumn.classList.toggle("active");
      button.classList.toggle("menos");
    });
  });
});
