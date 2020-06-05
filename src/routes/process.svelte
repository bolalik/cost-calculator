<script>
  import { processStore } from "./../store/process";
  import ChoiceScreen from "./../components/ChoiceScreen.svelte";
</script>

<svelte:head>
  <title>Cost Calculator: Site</title>
</svelte:head>

<div>
  <ChoiceScreen choiceScreen={$processStore} />


  <a href="budget">next</a>
</div>
