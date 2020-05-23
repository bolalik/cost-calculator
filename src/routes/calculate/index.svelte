<script context="module">
  import requests from "../../data/requests.js";
  import ChoiceCard from "../../components/ChoiceCard.svelte"
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
  let total;
  let max_total;
  let selected = "";

  let active=true;
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<style>
/* .active{
  background-color: aqua;
} */
</style>

{#each sections as section, id}

  <ChoiceCard {section}/>
{/each}


Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>