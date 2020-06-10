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

<style lang="scss">
  @import "./../static/my-theme.scss";
  @import "@material/slider/mdc-slider";
</style>

<!-- <style>
  .custom-range {
    width: 15rem;
    height: 1.4rem;
    padding: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;

    display: inline-block;
    background-color: white;
    padding: 0.5rem;
  }
  input[type="range"] {
    margin: 0;
  }

  .custom-range:focus {
    outline: none;
  }

  .custom-range:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  .custom-range:focus::-moz-range-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  .custom-range:focus::-ms-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  .custom-range::-moz-focus-outer {
    border: 0;
  }
  .custom-range::-webkit-slider-thumb {
    width: 1rem;
    height: 1rem;
    margin-top: -0.25rem;
    background-color: #007bff;
    border: 0;
    border-radius: 1rem;
    -webkit-transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -webkit-appearance: none;
    appearance: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .custom-range::-webkit-slider-thumb {
      -webkit-transition: none;
      transition: none;
    }
  }

  .custom-range::-webkit-slider-thumb:active {
    background-color: #b3d7ff;
  }

  .custom-range::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem;
  }

  .custom-range::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    background-color: #007bff;
    border: 0;
    border-radius: 1rem;
    -moz-transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -moz-appearance: none;
    appearance: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .custom-range::-moz-range-thumb {
      -moz-transition: none;
      transition: none;
    }
  }

  .custom-range::-moz-range-thumb:active {
    background-color: #b3d7ff;
  }

  .custom-range::-moz-range-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem;
  }

  .custom-range::-ms-thumb {
    width: 1rem;
    height: 1rem;
    /* margin-top: 0; */
    /* margin-right: 0.2rem; */
    /* margin-left: 0.2rem; */
    background-color: #007bff;
    border: 0;
    border-radius: 1rem;
    -ms-transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    appearance: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .custom-range::-ms-thumb {
      -ms-transition: none;
      transition: none;
    }
  }

  .custom-range::-ms-thumb:active {
    background-color: #b3d7ff;
  }

  .custom-range::-ms-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: transparent;
    border-color: transparent;
    border-width: 0.5rem;
  }

  .custom-range::-ms-fill-lower {
    background-color: #dee2e6;
    border-radius: 1rem;
  }

  .custom-range::-ms-fill-upper {
    /* margin-right: 15px; */
    background-color: #dee2e6;
    border-radius: 1rem;
  }

  .custom-range:disabled::-webkit-slider-thumb {
    background-color: #adb5bd;
  }

  .custom-range:disabled::-webkit-slider-runnable-track {
    cursor: default;
  }

  .custom-range:disabled::-moz-range-thumb {
    background-color: #adb5bd;
  }

  .custom-range:disabled::-moz-range-track {
    cursor: default;
  }

  .custom-range:disabled::-ms-thumb {
    background-color: #adb5bd;
  }
  .price {
    display: inline-block;
    background-color: white;
    padding: 0.5rem;

    font: 1em "Lucida Console", Monaco, monospace;

    height: 1.4rem;
    /* margin-top: -0.25rem; */
  }
  .my-flex {
    display: flex;
    background-color: white;
    padding: 0.1rem 1rem;
  }
</style> -->

<label class="my-flex">
  <input
    type="range"
    bind:value={slider.price}
    class="custom-range"
    max={10000}
    step={100} />
  <span class="price">
    {#if slider.price != 10000}${strPrice}{:else}${strPrice}+{/if}
  </span>
</label>

<div
  class="mdc-slider mdc-slider--discrete mdc-slider--display-markers"
  tabindex="0"
  role="slider"
  data-step="2"
  aria-valuemin="0"
  aria-valuemax="10000"
  aria-label="Select Value">
  <div class="mdc-slider__track-container">
    <div class="mdc-slider__track" />
    <div class="mdc-slider__track-marker-container" />
  </div>
  <div class="mdc-slider__thumb-container">
    <div class="mdc-slider__pin">
      <span class="mdc-slider__pin-value-marker" />
    </div>
    <svg class="mdc-slider__thumb" width="21" height="21">
      <circle cx="10.5" cy="10.5" r="7.875" />
    </svg>
    <div class="mdc-slider__focus-ring" />
  </div>
</div>
<span class="price">
  {#if slider.price != 10000}${strPrice}{:else}${strPrice}+{/if}
</span>
