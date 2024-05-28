function calcul() {
	if (document.getElementById("date").value == "") {
		document.getElementById("alert").innerHTML = "Erreur : Veuillez choisir la date de votre départ!!";
	}
	else
		calcul2();
}
function calcul2() {

	var D = document.forms[0].depart.selectedIndex;
	//var D =document.getElementById("b").selectedIndex;
	var A = document.forms[0].arrive.selectedIndex;
	var prix = 0;

	if (D == 0 && A == 0) {
		prix = 300;
	}
	if (D == 0 && A == 1) {
		prix = 200;
	}
	if (D == 1 && A == 0) {
		prix = 400;
	}
	if (D == 1 && A == 1) {
		prix = 500;
	}

	var Na = document.forms[0].NA.value;
	//document.getElementById('NA').value;
	var Ne = document.forms[0].NE.value;
	var Nb = document.forms[0].NB.value;

	var P1 = Na * prix;
	var P2 = Ne * prix * 0.5;
	var P3 = Nb * prix * 0.3;

	var P = P1 + P2 + P3;

	document.getElementById("prix").value = P;
}