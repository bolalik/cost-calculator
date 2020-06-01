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

  // reactive declaration (computed prop in other frameworks)
  $: isActive = card.active === "CARD_ACTIVE";
</script>

<style>
  .loading-item {
    height: 3rem;
    background: white;
    display: flex;
    align-items: center;
    line-height: 1rem;
    padding-left: 16px;
  }
  .card-title {
    display: inline-block;
    background-color: white;
    padding: 0.5rem;
    margin: 0rem;
    font: 1em "Lucida Console", Monaco, monospace;
    border: 0rem solid azure;
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

<div class="loading-item">
<a href="/" on:click|preventDefault={Choice} class="card-title">{card.title}</a>
</div>