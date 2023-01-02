"use strict";

let celkem;
let cena;
const auto = document.querySelector("#cars");
const barva = document.querySelectorAll(".barva");
const pridavek = document.querySelectorAll(".pridavek");
const celkovaCastka = document.querySelector("#castkaZak");
const update = document.querySelector("#update");
let zprava = document.getElementById("zprava-zakaznikovi");
const cenaZakaznik = document.querySelector("#priceZakaznik");

update.addEventListener("click", () => {
  celkem = 0;
  barva.forEach((element) => {
    if (element.checked) {
      celkem += (parseInt(element.value) / 100) * parseInt(auto.value);
    }
  });
  pridavek.forEach((element) => {
    if (element.checked) {
      if (element.id === "tuning") {
        celkem += (parseInt(element.value) / 100) * parseInt(auto.value);
      } else {
        celkem += parseInt(element.value);
      }
    }
  });

  celkem += parseInt(auto.value);
  if (parseInt(cenaZakaznik.value) < celkem) {
    zprava.innerText =
      "celková cena: " +
      celkem +
      "Kč - Cena za auto je vyšší než Vaše finanční možnosti.";
  } else if (parseInt(cenaZakaznik.value) > celkem) {
    zprava.innerText = "celková cena: " + celkem + " Kč - Auto je Vaše!";
  } else if (!cenaZakaznik.value) {
    zprava.innerText = "celková cena: " + celkem + " Kč";
  }
});

function odesli() {
  let email = document.querySelector("#email").value;
  if (email.includes("@")) {
    alert("Formulář o objednávce odeslán...");
    location.reload();
  } else alert("Vyplňte prosím email ve správném tvaru!");
}
