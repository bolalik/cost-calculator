<script>
  import CardList from "./PureCardList.svelte";
  import TextInput from "./TextInput.svelte";
  import Title from "./Title.svelte";
  export let error = false;
  export let domainScreen = {
    textInputLike: "",
    textInputYour: "",
    title: "",
    cards: ""
  };
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
      <Title title={domainScreen.title} />
      <CardList cards={domainScreen.cards} on:choice />

      <TextInput textInput={domainScreen.textInputLike} />

      <TextInput textInput={domainScreen.textInputYour} />

    </div>
  {/if}
</div>
