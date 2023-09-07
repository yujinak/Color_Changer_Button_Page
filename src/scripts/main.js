"use strict";

const randomRGB = function () {
  const colorNumber1 = Math.floor(Math.random() * 255 + 1);
  const colorNumber2 = Math.floor(Math.random() * 255 + 1);
  const colorNumber3 = Math.floor(Math.random() * 255 + 1);

  return `rgb(${colorNumber1},${colorNumber2},${colorNumber3})`;
};

document
  .getElementById("botao-cor-fundo")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = randomRGB();
    document.getElementById("creditos").innerText =
      "Criado por Gabriel Yuji Nakashima";
  });
