function jednicka() {
  let jm = document.getElementById("jmeno").value;
  //vypis do konzole
  console.log(jm);
  //alert("no nazdar " + jm + "!");

}

function vypocet() {
  let c1 = document.getElementById("cislo1").valueAsNumber;
  let c2 = document.getElementById("cislo2").valueAsNumber;
  let op = document.getElementById("operace").value;
  
  let vysl = "?";
  if (isNaN(c1)) {
    alert("Není zadáno první číslo!");
  }
  else if (isNaN(c2)) {
    alert("Není zadáno druhé číslo!");
  }
  else if (op == "plus") {
    vysl = c1 + c2;
  }
  else if (op == "minus") {
    vysl = c1 - c2;
  }

  document.getElementById("vysl").value = vysl;
  document.getElementById("vysledek2").innerHTML = "Výsledek je <b>" + vysl + "</b>."; 
  //alert(num);
}
