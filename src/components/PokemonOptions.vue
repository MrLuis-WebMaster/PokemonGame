<template>
  <div class="options-container">
    <ul>
        <li
          v-for="{name,id} in pokemons"
          :key="id"
          @click="$emit('select',id)"
          >{{name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        pokemons: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>

    li {
        font-size: 16px;
        letter-spacing: 2px;
        text-decoration: none;
        text-transform: uppercase;
        color: #000;
        cursor: pointer;
        border: 3px solid;
        padding: 0.25em 0.5em;
        box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
        position: relative;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        text-align: center;
        margin-bottom: 15px;
        width: 250px;
    }
    li:active {
        box-shadow: 0px 0px 0px 0px;
        top: 5px;
        left: 5px;
    }
    @media (min-width: 768px) {
        li {
            padding: 0.25em 0.75em;
        }
    }
    ul {
        list-style-type: none;
        padding: 0;
        margin: 1rem 0;
    }
    .options-container {
        display: flex;
        justify-content: center;
    }
</style>