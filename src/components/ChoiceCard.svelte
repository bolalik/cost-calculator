<script>
  export let section;
  let yes = "positive-vote.svg";
  let no = "negative-vote.svg";
  let maybe = "anonymous.svg";

  let active =false;
</script>

<style>
  img {
    width: 3rem;
    height: auto;
  }
  input[type="radio"] {
    cursor: pointer;
    display: none;
   
  }
  .active{
    padding: 1rem;
    background-color: aquamarine;
  }
</style>

<h1 >{section.name}</h1>

<label  class="{active ? 'active' : ''}" on:click={() => active=!active}>
  <input type="radio" bind:group={section.id} value={1} />
  <img src={yes} alt=" img " />
</label>

<label class="{active ? 'active' : ''}" on:click={() => active=!active}>
  <input type="radio" bind:group={section.id} value={2} />
  <img src={no} alt=" img " />
</label>
<label  class:active on:click={() => active=!active}>
  <input type="radio" bind:group={section.id} value={3} />
  <img src={maybe} alt=" img " />
</label>
{active}
{#if section.id === 1}
  <h3>{section.base}</h3>
  {#if section.extra}
    <h4>{section.extra}</h4>
  {/if}
{/if}
