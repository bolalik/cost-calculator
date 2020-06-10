<script>
  import data from "../data/process";
  import ChoiceScreen from "./../components/ChoiceScreen.svelte";

  import Button from "../components/Button.svelte";

  import { siteStore } from "./../store";

  function onChoice(event) {
    siteStore.choose(event.detail.title, event.detail.state);
  }
</script>

<style>
  .right {
    float: right;
  }
  .flex {
    display: block;
  }
</style>

<svelte:head>
  <title>Cost Calculator: Site</title>
</svelte:head>
<div>
  <ChoiceScreen choiceScreen={data} on:choice={onChoice} />

  <div class="flex">
    <div class="right">
      <Button href="goals" color="secondary" value="back" />
      <Button href="budget" />
    </div>
  </div>
</div>
