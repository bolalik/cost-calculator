<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

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
    font: 1.2rem "Roboto", Monaco, monospace;
    border: 0;
  }

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
  .text-flex {
    line-height: 24px;
    font: 1.3em "Roboto", Monaco, monospace;
    display: flex;
    background-color: white;
    flex-direction: column;
    padding: 1rem 2rem;
    margin: 0 2rem;
    text-align: start;
  }
  .title {
    padding: 0.5rem;
    margin: 0 1rem;
  }
  .input-text {
    margin: 0 2rem;
  }
</style>

<div class="text-flex">
  <div class="title">{textInput.label}</div>
  <div class="input-text">
    <input bind:value={textInput.value} placeholder={textInput.placeholder} />
  </div>
</div>
