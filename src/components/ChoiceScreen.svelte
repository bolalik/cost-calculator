
<script>
  import CardList from './CardList.svelte';
  import TextInput from './TextInput.svelte';
  export let error = false;
  export let textInput;
</script>

<div>
  {#if error}
  <div class="page lists-show">
    <div class="wrapper-message">
      <span class="icon-face-sad" />
      <div class="title-message">Oh no!</div>
      <div class="subtitle-message">Something went wrong</div>
    </div>
  </div>
  {:else}
  <div class="page lists-show">
    
    <CardList />
  </div>
    <TextInput {textInput}/>
  {/if}
</div>