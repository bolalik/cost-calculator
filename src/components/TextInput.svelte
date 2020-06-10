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
    padding: 0.7rem;
    font: 1.2rem "Roboto", Monaco, monospace;
    /* border: 0; */
     border-radius: 10px;
    border-color: hsl(0, 0%, 91%);
  }

  input:focus {
    color: royalblue;
    border-radius: 10px;
    border: 0.1rem solid aquamarine;
  }
  input:visited {
    color: aqua;
     border-radius: 10px;
    border: 0.1rem solid aquamarine;
  }
  input:hover,
  input:active {
    color: royalblue;
    transition: 0.4s ease-in-out;
    background-color: white;
    border: 0.1rem solid aquamarine;
     border-radius: 10px;
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
     border-radius: 10px;
  }
  .title {
    padding: 0.5rem;
    margin: 0 1rem;
     border-radius: 10px;
  }
  .input-text {
    margin: 0 2rem;
     border-radius: 10px; 
  }


</style>

<div class="text-flex">
  <div class="title">{textInput.label}</div>
  <div class="input-text">
    <input bind:value={textInput.value} placeholder={textInput.placeholder} />
  </div>
</div>
