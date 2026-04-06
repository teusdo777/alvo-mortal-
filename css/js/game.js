let score = 0;
const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");

function moveTarget() {
const gameArea = document.getElementById("gameArea");

```
const maxX = gameArea.clientWidth - 50;
const maxY = gameArea.clientHeight - 50;

const x = Math.random() * maxX;
const y = Math.random() * maxY;

target.style.left = x + "px";
target.style.top = y + "px";
```

}

// clicar no alvo
target.addEventListener("click", () => {
score++;
scoreDisplay.innerText = score;
moveTarget();
});

// mover automaticamente
setInterval(moveTarget, 1000);

// posição inicial
moveTarget();
