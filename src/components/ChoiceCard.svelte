<script context="module">

</script>

<script>
  export let section;
  export let total;
  export let totalExtra;
  export let selected;
  export let selectedExtra;

  let activeYes = false;
  let activeNo = false;
  let activeMaybe = false;

  let yes = "positive-vote.svg";
  let no = "negative-vote.svg";
  let maybe = "anonymous.svg";

  function choice(section, choice) {
    const baseUnit = +section.base.replace(/^\D+/g, "");
    let addTotal = () => {
      total += baseUnit;
      selected.push(section.base);
      console.log(selected);
    };

    let rmTotal = () => {
      total -= baseUnit;
      selected.pop(section.base);
      console.log(selected);
    };
    let addTotalExtra = () => {
      totalExtra += baseUnit;
      selectedExtra.push(section.base);
      console.log("extra", selectedExtra);
    };
    let rmTotalExtra = () => {
      totalExtra -= baseUnit;
      selectedExtra.pop(section.base);
      console.log("extra", selectedExtra);
    };

    if (choice === "yes") {
      activeYes = !activeYes;

      if (activeYes && activeMaybe) {
        addTotal();
        rmTotalExtra();
      } else if (activeYes) {
        addTotal();
      } else {
        rmTotal();
      }

      activeNo = false;
      activeMaybe = false;
    } else if (choice === "no") {
      activeNo = !activeNo;

      if (activeNo && activeYes) {
        rmTotal();
      } else if (activeNo && activeMaybe) {
        rmTotalExtra();
      }

      activeYes = false;
      activeMaybe = false;
    } else if (choice === "maybe") {
      activeMaybe = !activeMaybe;

      if (activeMaybe && activeYes) {
        rmTotal();
        addTotalExtra();
      } else if (activeMaybe) {
        addTotalExtra();
      } else {
        rmTotalExtra();
      }

      activeYes = false;
      activeNo = false;
    }
  }

</script>

<style>
  img {
    width: 3rem;
    height: auto;
  }

  label:hover {
    /* padding: 1rem; */
    height: auto;
    background-color: aquamarine;
  }
  .active {
    padding: 1rem;
    background-color: aquamarine;
  }
  input[type="radio"] {
    cursor: pointer;
    display: none;
  }
</style>

<h2>{section.name}</h2>

<label class={activeYes ? 'active' : ''}>
  <input
    type="radio"
    bind:group={section.id}
    value={1}
    on:click={choice(section, 'yes')} />
  <img src={yes} alt=" img " />
</label>

<label class={activeNo ? 'active' : ''}>
  <input
    type="radio"
    bind:group={section.id}
    value={2}
    on:click={choice(section, 'no')} />
  <img src={no} alt=" img " />
</label>

<label class={activeMaybe ? 'active' : ''}>
  <input
    type="radio"
    bind:group={section.id}
    value={3}
    on:click={choice(section, 'maybe')} />
  <img src={maybe} alt=" img " />
</label>
{#if activeYes}
  <h3>{section.base}</h3>

  {#if section.extra}
    <h4>{section.extra}</h4>
  {/if}
{/if}

{selected.toString()}