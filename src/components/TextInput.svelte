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
  export let textInput = {
    id: "",
    label: "",
    placeholder: "",
    value: ""
  };
</script>

<style>
  input {
    width: 12rem;
    padding: 0.5rem;
    font: 1rem "Lucida Console", Monaco, monospace;
    border: 0;
  }
  /* input:valid {
    border: 0.1rem solid aquamarine;
  } */
  input:focus {
    color: royalblue;
    border: 0.1rem solid aquamarine;
  }
  input:visited {
    color: aqua;
    border: 0.1rem solid aquamarine;
  }
  input:hover,
  input:active {
    color: royalblue;
    transition: 0.4s ease-in-out;
    background-color: white;
    border: 0.1rem solid aquamarine;
  }
  .my-flex {
    line-height: 24px;
    font: 1.1em "Lucida Console", Monaco, monospace;
    display: flex;
    background-color: white;
    flex-direction: column;
    padding: 1rem;
  }
</style>

<label class="my-flex">
  <p>{textInput.label}</p>
  <input bind:value={textInput.value} placeholder={textInput.placeholder} />
</label>
