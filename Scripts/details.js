function details() {
    document.getElementById("root").innerHTML = "details"
}

async function detail(pokemon) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data = await res.json();
    console.log(data);

    console.log(data.forms[0].name);
    console.log(data.id);

    document.getElementById("root").innerHTML = `<div style="background-color: red; color: white; border-radius: 8px; padding: 4px 12px;">${data.forms[0].name}</div>`
}

detail(6)