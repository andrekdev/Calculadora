const song = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/3069/3069-preview.mp3"
);

function insert(num) {
  let numero = document.querySelector(".resultado").innerHTML;
  document.querySelector(".resultado").innerHTML = numero + num;
  song.play();
}

function clean() {
  song.play();
  document.querySelector(".resultado").innerHTML = "";
}

function back() {
  song.play();
  const resultado = document.querySelector(".resultado").innerHTML;
  document.querySelector(".resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}

function calcular() {
  song.play();
  const resultado = document.querySelector(".resultado").innerHTML;

  if (resultado) {
    document.querySelector(".resultado").innerHTML = eval(resultado);
  }
}

const fundoBg = document.querySelector(".fundoBg");

fundoBg.addEventListener("click", function () {
  document.body.style.backgroundColor = "#1b2029";
});
