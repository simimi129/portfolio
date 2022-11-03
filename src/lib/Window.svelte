<script>
  import Section from "./Section.svelte";
  import Text from "./Text.svelte";
  import Quote from "./Quote.svelte";
  import Stack from "./Stack.svelte";
  import Timeline from "./Timeline.svelte";
  import Projects from "./Projects.svelte";
  import Contact from "./Contact.svelte";
</script>

<div class="window">
  <div id="about" class="about">
    <div class="bg-img" />
    <Section title={"About"} />
    <Text />
    <Quote />
  </div>
  <div class="bg">
    <div id="experience" class="experience">
      <Section title={"Experience"} />
      <Stack />
      <Timeline />
    </div>
    <div id="projects" class="projects">
      <Section title={"Projects"} />
      <Projects />
    </div>
    <div id="contact" class="contact">
      <Section title={"Contact"} />
      <Contact />
    </div>
  </div>
</div>

<style>
  .bg-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../assets/bg.webp");
    background-size: cover;
    background-position: center;
    z-index: -1;
    border-radius: 20px;
  }

  .bg-img::after {
    content: "";
    border-radius: 20px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px) saturate(100%) contrast(100%) brightness(90%);
    -webkit-backdrop-filter: blur(20px) saturate(100%) contrast(100%)
      brightness(90%);
  }

  .bg {
    width: calc(100% - 2px);
    border-top: 1px solid #000;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-bottom: 2px;
    border-radius: 20px;
  }

  .about {
    position: relative;
    margin-bottom: 60px;
    border-radius: 20px;
  }

  .contact {
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 110px 60px 110px;
  }

  .about,
  .experience,
  .projects {
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 110px;
  }

  .window {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    border-radius: 12px;
  }
</style>
