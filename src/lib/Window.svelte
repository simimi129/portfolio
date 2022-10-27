<script>
  import Section from "./Section.svelte";
  import Text from "./Text.svelte";
  import Quote from "./Quote.svelte";
</script>

<div class="window">
  <div class="about">
    <Section title={"About"} />
    <Text />
    <Quote />
  </div>
  <div class="skills">
    <Section title={"Skills"} />
  </div>
</div>

<style>
  .about,
  .skills {
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .window {
    height: 100%;
    padding: 20px 110px;
    border: 1px solid #000;
    border-radius: 12px;
    box-shadow: 0 22px 70px 4px rgba(0, 0, 0, 0.56),
      inset 0 0 0 1px var(--color-border);
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px) saturate(100%) contrast(100%) brightness(50%);
    -webkit-backdrop-filter: blur(30px) saturate(100%) contrast(100%)
      brightness(90%);
  }
</style>
