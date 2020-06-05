<script>
  import CardList from "./PureCardList.svelte";
  import TextInput from "./TextInput.svelte";
  import Title from "./Title.svelte";
  export let error = false;
  export let cards;
  export let title;
  export let textInputLike;
  export let textInputYour;
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
      <CardList {cards} />
      <TextInput textInput={textInputLike} />
      <TextInput textInput={textInputYour} />
    </div>
  {/if}
</div>
