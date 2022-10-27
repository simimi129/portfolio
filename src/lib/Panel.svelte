<script>
  import Navigation from "./Navigation.svelte";
  import Hero from "./Hero.svelte";
  import Window from "./Window.svelte";
</script>

<div class="panel">
  <Navigation />
  <Hero />
  <Window />
</div>

<style>
  .panel {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    width: 100%;
    height: 200%;
  }
</style>
