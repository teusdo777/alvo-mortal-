let selecionados = [];

function selecionar(elemento) {
selecionados.push(elemento);
document.getElementById("saida").innerText =
"Selecionados: " + selecionados.join(" + ");
}

function combinar() {
let resultado = "";
let combo = selecionados.join("");

```
if (combo === "HO" || combo === "OH") {
    resultado = "💧 Água (H2O) - Essencial para a vida!";
} 
else if (combo === "NaCl" || combo === "ClNa") {
    resultado = "🧂 Sal (NaCl) - Usado na cozinha!";
} 
else {
    resultado = "❌ Combinação desconhecida...";
}

document.getElementById("saida").innerText = resultado;
selecionados = [];
```

}
