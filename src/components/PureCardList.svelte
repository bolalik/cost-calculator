<script>
  import Card from "./Card.svelte";
  import LoadingRow from "./LoadingCard.svelte";
  export let loading = false;
  export let cards = [];

 
  
  $: noCards = cards.length === 0;
  $: emptyCards = cards.length === 0 && !loading;
</script>

<style>
  .wrapper-message {
    position: absolute;
    top: 45%;
    right: 0;
    bottom: auto;
    left: 0;
    width: auto;
    height: auto;
    transform: translate3d(0, -50%, 0);
    text-align: center;
  }
  .wrapper-message [class^="icon-"] {
    font-size: 48px;
    line-height: 56px;
    color: #2cc5d2;
    display: block;
  }
  .wrapper-message .title-message {
    font-size: 16px;
    line-height: 24px;
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 800;
    color: #555;
  }
  .wrapper-message .subtitle-message {
    font-size: 14px;
    line-height: 20px;
    color: #666;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    margin: 0 2rem;
    padding: 0 2rem;
  }
</style>

{#if loading}

  <div class="list-items">
    <LoadingRow />
    <LoadingRow />
    <LoadingRow />
    <LoadingRow />
    <LoadingRow />
  </div>
{/if}
{#if emptyCards}
  <div class="list-items">
    <div class="wrapper-message">
      <span class="icon-check" />
      <div class="title-message">You have no cards</div>
      <div class="subtitle-message">Sit back and relax</div>
    </div>
  </div>
{/if}
{#if !noCards}
  <div class="cards">

    {#each cards as card}
      <Card {card}  on:choice />
    {/each}
  </div>
{/if}
