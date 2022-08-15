<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div class="container-game" v-else>
    <h1>¿Quien es el pokemon?</h1>
    <PokemonPicture :PokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions @select="checkAnswer" :pokemons="arrPokemons" />
    <template v-if="showAnswer">
      <h2 class="fade-in"> <span>{{ message }}</span></h2>
      <button @click="newGame">Nuevo juego</button>
    </template>
  </div>
</template>
<script>
import PokemonPicture from "../components/PokemonPicture.vue";
import PokemonOptions from "../components/PokemonOptions.vue";
import getPokemonOptions from "../Helpers/getPokemonsOptions";

getPokemonOptions();

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      arrPokemons: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixedPokemonsArray() {
      this.arrPokemons = await getPokemonOptions();
      const randomInt = Math.floor(Math.random() * 4);
      this.pokemon = this.arrPokemons[randomInt];
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true;
      this.showAnswer = true;
      if (pokemonId === this.pokemon.id) {
        this.message = `Correcto, es ${this.pokemon.name}`;
      } else {
        this.message = `Incorrecto es ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.showAnswer = false;
      this.showPokemon = false;
      this.arrPokemons = [];
      this.pokemon = null;
      this.mixedPokemonsArray();
    },
  },
  mounted() {
    this.mixedPokemonsArray();
  },
};
</script>

<style scoped>
    h1 {
        text-align: center;
    }
    .container-game {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    span {
        text-transform: capitalize;
    }
    button {
        align-items: center;
        background-color: #fee6e3;
        border: 2px solid #111;
        border-radius: 8px;
        box-sizing: border-box;
        color: #111;
        cursor: pointer;
        display: flex;
        font-size: 16px;
        height: 48px;
        justify-content: center;
        line-height: 24px;
        max-width: 100%;
        padding: 0 25px;
        position: relative;
        text-align: center;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }

    button:after {
        background-color: #111;
        border-radius: 8px;
        content: "";
        display: block;
        height: 48px;
        left: 0;
        width: 100%;
        position: absolute;
        top: -2px;
        transform: translate(8px, 8px);
        transition: transform 0.2s ease-out;
        z-index: -1;
    }

    button:hover:after {
        transform: translate(0, 0);
    }

    button:active {
        background-color: #ffdeda;
        outline: 0;
    }

    button:hover {
        outline: 0;
    }

    @media (min-width: 768px) {
        button {
            padding: 0 40px;
        }
    }
</style>
