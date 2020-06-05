<script>
  import PureCardList from './PureCardList.svelte';
  import { cardStore } from '../store';
  function onChoice(event) {
    cardStore.choose(event.detail.id);
  }

</script>

<div>
  <PureCardList
    cards={$cardStore.cards}
    on:onChoice={onChoice}
  />
</div>