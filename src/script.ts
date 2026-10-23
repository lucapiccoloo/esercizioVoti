const inputNome = document.getElementById("nome") as HTMLInputElement;
const inputVoto = document.getElementById("voto") as HTMLInputElement;
const btnRegistra = document.getElementById("registra") as HTMLButtonElement;
const messaggio = document.getElementById("messaggio") as HTMLParagraphElement;
const immagine = document.getElementById("immagine") as HTMLImageElement;
const elenco = document.getElementById("elenco") as HTMLUListElement;

const contaInsufficiente = document.getElementById("conta-insufficiente") as HTMLTableCellElement;
const contaSufficiente = document.getElementById("conta-sufficiente") as HTMLTableCellElement;
const contaBuono = document.getElementById("conta-buono") as HTMLTableCellElement;
const contaOttimo = document.getElementById("conta-ottimo") as HTMLTableCellElement;

let nInsufficiente = 0;
let nSufficiente = 0;
let nBuono = 0;
let nOttimo = 0;

function registra(): void {
  const nome = inputNome.value.trim();
  const votoTesto = inputVoto.value.trim();
  const voto = Number(votoTesto);

  if (nome === "") {
    messaggio.textContent = "Inserisci il nome dell'alunno";
    return;
  }

  if (votoTesto === "" || isNaN(voto) || voto < 0 || voto > 10) {
    messaggio.textContent = "Errore: il voto deve essere un numero da 0 a 10!";
    return;
  }

  messaggio.textContent = "";

  let giudizio: string;

  if (voto >= 0 && voto <= 5) {
    giudizio = "Insufficiente";
  } else if (voto === 6) {
    giudizio = "Sufficiente";
  } else if (voto === 7 || voto === 8) {
    giudizio = "Buono";
  } else {
    giudizio = "Ottimo";
  }

  if (giudizio === "Insufficiente") {
    immagine.src = "img/insufficiente.png";
    immagine.alt = "Semaforo rosso";
  } else if (giudizio === "Sufficiente") {
    immagine.src = "img/sufficiente.png";
    immagine.alt = "Semaforo giallo";
  } else if (giudizio === "Buono") {
    immagine.src = "img/buono.png";
    immagine.alt = "Semaforo verde";
  } else {
    immagine.src = "img/ottimo.jpg"; 
    immagine.alt = "Stella";
  }

  immagine.style.display = "block";

  const nuovoLi = document.createElement("li");
  nuovoLi.textContent = nome + " – " + voto + " (" + giudizio + ")";
  nuovoLi.classList.add(giudizio.toLowerCase());
  elenco.appendChild(nuovoLi);

  if (giudizio === "Insufficiente") {
    nInsufficiente++;
    contaInsufficiente.textContent = String(nInsufficiente);
  } else if (giudizio === "Sufficiente") {
    nSufficiente++;
    contaSufficiente.textContent = String(nSufficiente);
  } else if (giudizio === "Buono") {
    nBuono++;
    contaBuono.textContent = String(nBuono);
  } else {
    nOttimo++;
    contaOttimo.textContent = String(nOttimo);
  }

  inputNome.value = "";
  inputVoto.value = "";
  inputNome.focus();
}

btnRegistra.addEventListener("click", registra);