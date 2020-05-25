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
  let maxTotal = 0;
  let selected = [];

  let active = true;

  let count = 0;
</script>

<style>
  /* .active{
  background-color: aqua;
} */
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>
{#each sections as section, id}

  <ChoiceCard {section} {id} bind:total  bind:maxTotal  bind:selected/>
{/each}
<h1>{total}</h1>
{#if maxTotal}
  <h1>{maxTotal}</h1>
{/if}


<h1>{selected.toString()}</h1>

<p>
Icons made by
<a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
from
<a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

</p>