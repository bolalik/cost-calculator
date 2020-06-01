<script>
  import Card from "./Card";
  import LoadingRow from "./LoadingCardList";
  export let loading = false;
  export let cards = [];

  $: noCards = cards.length === 0;
  $: emptyCards = cards.length === 0 && !loading;
  $: cardsInOrder = [
    ...cards.filter(t => t.state === "TASK_PINNED"),
    ...cards.filter(t => t.state !== "TASK_PINNED")
  ];
</script>

<style>


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
{#each cards as card}
  <Card {card} on:onChoice />
{/each}
