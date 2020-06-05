<script>
  import { domainStore } from "./../store/domain";
  import DomainScreen from "./../components/DomainScreen.svelte";
</script>

<svelte:head>
  <title>Cost Calculator: Site</title>
</svelte:head>

<div>
  <DomainScreen domainScreen={$domainStore} />


  <a href="result">finish</a>
</div>
