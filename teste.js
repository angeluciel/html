function updateModifier(scoreId, modId) {
	// convert Score to Modifier

	let scoreIdValue = document.getElementById(scoreId).value;
	document.getElementById(modId).value = Math.floor((scoreIdValue - 10)/2);
}

function updateProf() {
    // Obter o valor do campo de entrada de nível e converter para número
    let lvl = parseInt(document.getElementById('lvl').value);

    // Calcular o bônus de proficiência
    let profBonus = Math.floor((lvl - 1) / 4) + 2;
    // Definir o bônus de proficiência no campo correspondente
    document.getElementById('profBonus').value = profBonus;
}

function randomDie() {
    return (Math.random() * 6) + 1;
}

function randomAttribute() {
    return randomDie() + randomDie() + randomDie();
}

document.getElementById("lvl").addEventListener("change", function() {
    let v = parseInt(this.value);
    if (v < 1) this.value = 1;
    if (v > 20) this.value = 20;
});

function randomStr() {
    getElementById('strScore');
    document.getElementById('strScore').value = randomAttribute;
}