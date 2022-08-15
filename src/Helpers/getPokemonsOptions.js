import pokemonApi from "../Api/PokemonApi"

const getPokemons = () => {
    const pokemonArray = Array.from(Array(650))
    return pokemonArray.map((_,index)=> index+1)
}

const getNamesPokemons = async([p1,p2,p3,p4]=[]) => {
    const Arraypromises = [
        pokemonApi.get(`/${p1}`),
        pokemonApi.get(`/${p2}`),
        pokemonApi.get(`/${p3}`),
        pokemonApi.get(`/${p4}`),
    ]

    const [datap1,datap2,datap3,datap4] = await Promise.all(Arraypromises);

    return [
        {name: datap1.data.name, id: datap1.data.id},
        {name: datap2.data.name, id: datap2.data.id},
        {name: datap3.data.name, id: datap3.data.id},
        {name: datap4.data.name, id: datap4.data.id},
    ]
}

const getPokemonsOptions = async () => {
    const mixedPokemons = getPokemons().sort(()=> Math.random() - 0.5)
    const pokemons = await getNamesPokemons(mixedPokemons.splice(0,4))
    return pokemons
}

export default getPokemonsOptions;