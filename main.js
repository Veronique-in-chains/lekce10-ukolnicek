// do proměnné si uložíme prvek, do kterého budeme vypisovat seznam [úkol]

// založíme si prázdné pole, ve kterém budeme uchovávat úkoly
let ukoly = [];
// v poli budou úkoly jako objekty, každý úkol má popis a důležitost
// když něco v poli bude, mělo by to vypadat takto:
/*
ukoly = [
	{
		popis: 'Koupit chleba',
		dulezitost: 'vysoká'
	},
	{
		popis: 'Vyvenčit psa',
		dulezitost: 'střední'
	},
	... atd.
];
*/

// ihned po načtení stránky zavoláme funkci,
// která přečte seznam úkolů z Local Storage
nactiUkoly();
// a hned seznam úkolů zobrazíme



// funkce pro načtení seznamu úkolů z Local Storage
function nactiUkoly() {
  let hodnota = localStorage.ukoly;
  console.log("call of nactiUkoly");
  if(hodnota === null || hodnota === undefined) {
    ukoly = [];
  } else {
    ukoly = JSON.parse(hodnota);
  }
}


// funkce pro uložení seznamu úkolů do Local Storage
function ulozUkoly() {
  localStorage.ukoly = JSON.stringify(ukoly);;
}


// funkce pro zobrazení seznamu úkolů na stránce
function zobrazUkoly() {

}


// funkce, která vytvoří HTML prvky jednoho úkolu
// jako parametry očekává index úkolu v poli, popis a důležitost úkolu
function vytvorPrvekUkolu(index, popis, dulezitost) {

}


// funkce pro smazání úúkolu při kliknutí na tlačítko "x" vedle popisu úkolu
function odstranUkol() {

}


// funkce pro přidání úkolu do seznamu
function pridejUkol() {
  let popis = document.querySelector("#popis").value;
  let dulezitost = document.querySelector("#dulezitost").value;

  if (popis === "") {
    alert("Prosím, zadej popis úkolu.");
    return;
  }
  let ukol = {};
  ukol.popis = popis;
  ukol.dulezitost = dulezitost;

  ukoly.push(ukol);

  ulozUkoly();

}