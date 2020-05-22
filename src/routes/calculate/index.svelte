<script context="module">
  import requests from "../../data/requests.js";

   export async function preload() {
    try {
      const posts = await requests.posts();
      return { posts };
    } catch (e) {
      console.log("calc index.svelte", e);
    }
  }
</script>
<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great inner!</h1>


