<script>
  import Panel from "./lib/Panel.svelte";
</script>

<main class="main">
  <div class="bg" />
  <Panel />
</main>

<style>
  .main {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bg {
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("./assets/bg.webp");
    background-position: center;
    background-size: cover;
  }
</style>
