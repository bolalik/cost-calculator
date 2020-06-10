<script>
  import { siteStore } from "./../store";

   $: result = $siteStore.split(', '); 

</script>

<div>
  <h1>Result</h1>

    {#each result as item}
         <h2>{item}</h2>
    {/each}
 
  <a href="/">back</a>
</div>
