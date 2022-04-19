// do proměnné si uložíme prvek, do kterého budeme vypisovat seznam [úkol]
const seznam = document.querySelector("#seznam");
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
  localStorage.ukoly = JSON.stringify(ukoly);
}


// funkce pro zobrazení seznamu úkolů na stránce
function zobrazUkoly() {
  seznam.innerHTML = "";
  if (ukoly.length > 0) {
    for (let i = 0; i < ukoly.length; i++) {
      let ukol = vytvorPrvekUkolu(i, ukoly[i].popis, ukoly[i].dulezitost, ukoly[i].datum);
      seznam.appendChild(ukol);
    }
  }
}


// funkce, která vytvoří HTML prvky jednoho úkolu
// jako parametry očekává index úkolu v poli, popis a důležitost úkolu
function vytvorPrvekUkolu(index, popis, dulezitost, datum) {
  let liElement = document.createElement("li");
  liElement.textContent = `${popis} - ${dulezitost} důležitost - termín ${datum}`;

  let buttonElement = document.createElement("button");
  buttonElement.textContent = "x";
  buttonElement.dataset.index = index;
  buttonElement.onclick = odstranUkol;

  liElement.appendChild(buttonElement);

  return liElement;
}


// funkce pro smazání úúkolu při kliknutí na tlačítko "x" vedle popisu úkolu
function odstranUkol() {
  let index = this.dataset.index;
  ukoly.splice(index, 1);

  ulozUkoly();
  zobrazUkoly();
}


// funkce pro přidání úkolu do seznamu
function pridejUkol() {
  let popis = document.querySelector("#popis").value;
  let dulezitost = document.querySelector("#dulezitost").value;
  let datum = document.querySelector("#datum").value; 
  if (popis === "") {
    alert("Prosím, zadej popis úkolu.");
    return;
  }
  let ukol = {};
  ukol.popis = popis;
  ukol.dulezitost = dulezitost;
  ukol.datum = datum;

  ukoly.push(ukol);

  ulozUkoly();

  zobrazUkoly();
}