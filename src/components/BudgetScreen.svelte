<script>
  import CardList from "./PureCardList.svelte";
  import Slider from "./Slider.svelte";
  import Title from "./Title.svelte";
  export let error = false;
  export let cards;
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
       <Slider  />

      <CardList {cards}/>
    </div>
   
  {/if}
</div>
