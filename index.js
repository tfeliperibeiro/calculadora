const buttons = document.querySelectorAll("button");
const textScreen = document.querySelector("#text-screen");
const buttonReset = document.querySelector("#resete");
const buttonResult = document.querySelector("#result");
const buttonDel = document.querySelector("#del");
const checkbox = document.querySelector('#checkbox');

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!button.id) {
      textScreen.innerHTML += button.innerText;
    }
    if (textScreen.innerHTML.length === 12) {
      alert("Limite de números excedidos!");
      textScreen.innerHTML = "";
    }
  });
});

buttonReset.addEventListener("click", () => {
  textScreen.innerHTML = "";
});

buttonDel.addEventListener("click", () => {
  const result = textScreen.innerHTML;
  textScreen.innerHTML = result.substring(0, result.length - 1);
});

buttonResult.addEventListener("click", () => {
  const result = textScreen.innerHTML;
  if (result) {
    textScreen.innerHTML = eval(result);
  }
});

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('light');
})
