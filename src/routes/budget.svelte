<script>
  import data from "../data/budget";
  import BudgetScreen from "./../components/BudgetScreen.svelte";

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
  <BudgetScreen budgetScreen={data} on:choice={onChoice} />

  <div class="flex">
    <div class="right">
      <Button href="process" color="secondary" value="back" />
      <Button href="domain" />
    </div>
  </div>
</div>
