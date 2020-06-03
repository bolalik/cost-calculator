<script>
  import PureCardList from './PureCardList.svelte';
  import { cardStore } from '../store';
  function onChoice(event) {
    cardStore.Choice(event.detail.id);
  }

</script>

<div>
  <PureCardList
    cardList={$cardStore}
    cards={$cardStore.cards}
    on:onChoice={onChoice}
  />
</div>