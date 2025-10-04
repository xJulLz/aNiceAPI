async function connect(filtrotipo) {
    if(filtrotipo == "All"){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1024`);
    const data = await res.json();
    return data.results;
    }else{
    const res = await fetch(`https://i.co/api/v2/type/${filtrpokeapotipo}`);
    const data = await res.json();

    const pokemonesTipo = [];
    for (let i = 0; i < data.pokemon.length; i++) {
      pokemonesTipo.push(data.pokemon[i].pokemon);
    }
    return pokemonesTipo;
  }
}

let pokemones = [];

async function General() {
  if (pokemones.length === 0) {
    pokemones = await connect();
  }
  home();
}

General()

async function FiltroConexion(Elfiltro){
  document.getElementById("la-lista").innerHTML = "";
  pokemones = await connect(Elfiltro);
  const listaHTML = generarLista(pokemones);
  document.getElementById("la-lista").innerHTML = listaHTML;
}