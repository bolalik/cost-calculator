<script>
  import data from "../data/site-about";
  import { siteStore } from "./../store";
  import ChoiceScreen from "./../components/ChoiceScreen.svelte";
  import Button from "../components/Button.svelte";

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
      <Button href="goals" />
    </div>
  </div>
</div>
