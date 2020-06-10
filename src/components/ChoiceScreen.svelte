<script>
  import CardList from "./PureCardList.svelte";
  import TextInput from "./TextInput.svelte";
  import Title from "./Title.svelte";
  export let error = false;
  export let choiceScreen = {
    textInput: "",
    title: "",
    cards: ""
  };
</script>

<div>
  {#if error}
    <div>
      <div class="wrapper-message">
        <span class="icon-face-sad" />
        <div class="title-message">Oh no!1</div>
        <div class="subtitle-message">Something went wrong {error}</div>
      </div>
    </div>
  {:else}
    <div>
      <Title title={choiceScreen.title} />
      <CardList cards={choiceScreen.cards} on:choice />
    </div>
    {#if choiceScreen.textInput}
      <TextInput textInput={choiceScreen.textInput} />
    {/if}
  {/if}
</div>
