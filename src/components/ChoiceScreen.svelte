<script>
  import CardList from "./CardList.svelte";
  import TextInput from "./TextInput.svelte";
  import Title from "./Title.svelte";
  export let error = false;
  export let textInput;
  export let title;
</script>

<div>
  {#if error}
    <div>
      <div class="wrapper-message">
        <span class="icon-face-sad" />
        <div class="title-message">Oh no!</div>
        <div class="subtitle-message">Something went wrong</div>
      </div>
    </div>
  {:else}
    <div>
      <Title {title} />
      <CardList />
    </div>
    <TextInput {textInput} />
  {/if}
</div>
