<script>
  import Main from "./lib/Main.svelte";
</script>

<main class="main">
  <div class="bg" />
  <Main />
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
    background: linear-gradient(to bottom right, rgb(0, 0, 24), rgb(0, 0, 0));
  }
</style>
