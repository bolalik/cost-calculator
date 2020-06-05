<script>
  import { budgetStore } from "./../store/budget";
  import BudgetScreen from "./../components/BudgetScreen.svelte";
</script>

<svelte:head>
  <title>Cost Calculator: Site</title>
</svelte:head>

<div>
  <BudgetScreen budgetScreen={$budgetStore} />


  <a href="domain">next</a>
</div>
