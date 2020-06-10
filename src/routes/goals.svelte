<script>
  import data from "../data/goals";
  import ChoiceScreen from "./../components/ChoiceScreen.svelte";

  import { siteStore } from "./../store";
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
      <Button href="/" color="secondary" value="back" />
      <Button href="process" value="next" />
    </div>
  </div>
</div>
