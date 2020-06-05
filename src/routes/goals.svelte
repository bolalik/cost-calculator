<script>
  import { goalStore } from "./../store/goals";
  import ChoiceScreen from "./../components/ChoiceScreen.svelte";
</script>

<svelte:head>
  <title>Cost Calculator: Site</title>
</svelte:head>

<div>
  <ChoiceScreen choiceScreen={$goalStore} />


  <a href="process">next</a>
</div>
