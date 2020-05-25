<script context="module">
  import requests from "../../data/requests.js";
  import ChoiceCard from "../../components/ChoiceCard.svelte";
  export async function preload() {
    try {
      const sections = await requests.sections();
      return { sections };
    } catch (e) {
      console.log("calc index.svelte", e);
    }
  }
</script>

<script>
  export let sections;
  let total = 0;
  let totalExtra = 0;
  let selected = [];
  let selectedExtra = [];

  let active = true;

  let count = 0;

  $: sel = selected.toString();

</script>

<style>
  /* .active{
  background-color: aqua;
} */
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>
{#each sections as section}

  <ChoiceCard {section} bind:total  bind:totalExtra  bind:selected  bind:selectedExtra/>
{/each}
<h1>Total: {total}</h1>
{#if totalExtra}
  <h1> Max Total: {totalExtra+total}</h1>
{/if}


<h1>{sel}</h1>

<p>
Icons made by
<a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
from
<a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

</p>