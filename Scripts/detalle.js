function detalle() {
  document.getElementById("root").innerHTML = "Detalle"
}
async function Detalle(pokemon) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await res.json();

  console.log(data.forms[0].name);
  console.log(data.id);

  document.getElementById("root").innerHTML = `<div style="background-color: red; color: white; border-radius: 8px; padding: 4px 12px;">${data.forms[0].name}</div>`
}

Detalle
