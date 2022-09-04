function changeUniverse() {
    let universo = document.getElementById("universo").value;
    selectUniverse(universo);

    let option = "";
    for (i = 0; i < heroisArray.length; i++) {
        option = option + "<option value=" + heroisArray[i] + ">" + heroisArray[i] + "</option>";
    }
    document.getElementById("herois").innerHTML = option;
}

function selectUniverse(universo) {
    if (universo == 'dc') {
        heroisArray = ['batman', 'flash', 'greenlantern', 'superman', 'wolverine'];
    } else if (universo == 'marvel') {
        heroisArray = ['capitaoamerica', 'demolidor', 'hulk', 'ironman', 'thor'];
    } else {
        alert("Selecione um universo!")
    }
}

function repeticao() {
    let qtdRepeticoes = document.getElementById("rep").value;
    let heroi = document.getElementById("herois").value;
    let universo = document.getElementById("universo").value;

    for (i = 0; i < qtdRepeticoes; i++) {
        oi = document.write("<img src='assets/img/" + universo + "/" + heroi + ".jpg'>");
    }
    console.log(oi);
}