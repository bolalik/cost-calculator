<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  // event handler for Archive Card
  function Choice() {
    dispatch("choice", {
      title: card.title,
      state: card.state
    });
    card.active = !card.active;
  }

  // Card props
  export let card = {
    id: "",
    title: "",
    state: "",
    active: false
  };
</script>

<style lang="scss">
  @import "./../static/my-theme.scss";
  @import "@material/button/mdc-button";

  .card-item {
    margin: 0.1rem;
  }
  .card-item:hover {
    border: solid aquamarine;
    border-radius: 10px;
    border-color: hsl(0, 0%, 91%);

    margin: 0rem;
  }

  .active {
    border: solid aquamarine;
    border-radius: 10px;
    border-color: hsl(0, 0%, 91%);
    background-color: hsl(0, 0%, 91%)!important;
    margin: 0rem;
  }
</style>

<!-- <style>
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
  .active {
    border: 0.1rem solid aquamarine;
  }

  button {
    color: black;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    border: 0.1rem transparent;
  }

  button:hover {
    color: aqua;
    transition: 0.4s ease-in-out;
    background-color: white;
    border: 0.1rem solid aquamarine;
  }
</style> -->

<div class="card-item">
  <button
    on:click|preventDefault={Choice}
    class={` mdc-button mdc-button--outlined card-title  ${card.active === true ? 'active' : ''}`}>
    {card.title}
  </button>

</div>
