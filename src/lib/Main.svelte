<script>
  import Hero from "./Hero.svelte";
  import Window from "./Window.svelte";
  import TopBar from "./TopBar.svelte";
</script>

<div class="panel">
  <TopBar />
  <Hero />
  <Window />
</div>

<style>
  .panel {
    display: flex;
    flex-direction: column;
    max-width: 1240px;
    padding: 0 20px;
    width: 100%;
  }
</style>
