<script>
  import data from "../data/domain";
  import DomainScreen from "./../components/DomainScreen.svelte";

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
  <DomainScreen domainScreen={data} on:choice={onChoice} />

  <div class="flex">
    <div class="right">
      <Button href="budget" color="secondary" value="back" />
      <Button href="result" />
    </div>
  </div>
</div>
