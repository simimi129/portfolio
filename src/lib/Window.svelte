<script>
  import Section from "./Section.svelte";
  import Text from "./Text.svelte";
  import Quote from "./Quote.svelte";
  import Stack from "./Stack.svelte";
  import Timeline from "./Timeline.svelte";
  import Projects from "./Projects.svelte";
</script>

<div class="window">
  <div id="about" class="about">
    <Section title={"About"} />
    <Text />
    <Quote />
  </div>
  <div id="skills" class="skills">
    <Section title={"Skills"} />
    <Stack />
  </div>
  <div id="experience" class="experience">
    <Section title={"Experience"} />
    <Timeline />
  </div>
  <div id="projects" class="projects">
    <Section title={"Projects"} />
    <Projects />
  </div>
  <div id="contact" class="contact">
    <Section title={"Contact"} />
  </div>
</div>

<style>
  .about,
  .skills,
  .experience,
  .projects,
  .contact {
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .window {
    padding: 20px 110px;
    border: 1px solid #000;
    border-radius: 12px;
    box-shadow: 0 22px 70px 4px rgba(0, 0, 0, 0.56),
      inset 0 0 0 1px var(--color-border);
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(30px) saturate(100%) contrast(100%) brightness(90%);
    -webkit-backdrop-filter: blur(30px) saturate(100%) contrast(100%)
      brightness(90%);
  }
</style>
