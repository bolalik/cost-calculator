<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  // event handler for Archive Card
  //   function Choice() {
  //     dispatch("onChoice", {
  //       id: card.id
  //     });
  //   }

  // Card props
  export let slider = {
    id: "",
    price: 1000,
    pressed: false
  };

  $: strPrice = slider.price.toLocaleString();
</script>