<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  // event handler for Archive Card
  function Choice() {
    dispatch("onChoice", {
      id: card.id
    });
  }

  // Card props
  export let card = {
    id: "",
    title: "",
    state: "",
    active: false
  };

  let isActive = "";
  // reactive declaration (computed prop in other frameworks)
  $: if(card.active === true){isActive = "active"};
</script>

<style>
  .card-item {
    height: 3rem;
    background: white;
    display: flex;
    align-items: center;
    line-height: 1rem;
    padding: 0 0.5rem;
  }

 
  .card-title {
    display: inline-block;
    background-color: white;
    padding: 0.5rem;
    margin: 0rem;
    font: 1.3rem "Roboro", san-serif;
    border: 0rem solid azure;
  }
 .active{
    border: 0.1rem solid aquamarine;
  }

  a {
    color: black;
    transition: 0.2s ease-in-out;
    text-decoration: none;
  }

  a:hover {
    color: aqua;
    transition: 0.4s ease-in-out;
    background-color: white;
    border: 0.1rem solid aquamarine;
  }
</style>

<!--src/components/Card.svelte-->

<div class="card-item ">
  <a href="/" on:click|preventDefault={Choice} class={`card-title  ${isActive}`}>
    {card.title} {card.active}
  </a>
 
</div>
