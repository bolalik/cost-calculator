<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  // event handler for Archive Card
  function Choice() {
    dispatch("onChoice", {
      id: card.id
    });
  }

  // Title props
  export let title = {
    id: "",
    title: "",
    text: ""
  };
</script>

<style>
  .question {
    display: block;
    background-color: white;
    padding: 2rem;
  }
  .question-title {
    font-size: 2rem;

    margin: 0.4rem;
    line-height: 24px;
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 800;
    color: #555;
  }
  .question-text {
    margin: 0.4rem;
    font-size: 1.3rem;
    line-height: 24px;
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 200;
    color: #555;
  }
</style>

<div class="question">
  <div class="question-title">{title.title}</div>
  <div class="question-text">{title.text}</div>
</div>
