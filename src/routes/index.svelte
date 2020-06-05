<script>
  import { siteStore } from "./../store";
  import ChoiceScreen from "./../components/ChoiceScreen.svelte";


   function onChoice(event) {
    siteStore.choose(event.detail.id);
  }
</script>

<svelte:head>
  <title>Cost Calculator: Site</title>
</svelte:head>

<div>
  <ChoiceScreen choiceScreen={$siteStore}   on:onChoice={onChoice}/>

  <a href="goals">next</a>
</div>
