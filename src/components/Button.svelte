<script>
  export let href;
  export let color="";
  export let value="next";
</script>

<style lang="scss">
  @import "./../static/my-theme.scss";
  @import "@material/button/mdc-button";

  .secondary {
    background-color: grey!important;
  }
</style>

<a
  class={`mdc-button mdc-button--raised ${color}`}
  {href}>
  
  {value}
</a>
