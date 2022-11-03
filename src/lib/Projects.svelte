<script>
  import { projects } from "./../data/projects.js";
  import ProjectThumbnail from "./ProjectThumbnail.svelte";
  import Project from "./Project.svelte";

  let isSelected;
  let project;
</script>

<div class="projects">
  {#if isSelected}
    <Project {project} bind:isSelected />
  {:else}
    <div class="row">
      <div class="type">React</div>
      {#each projects.react as item}
        <ProjectThumbnail bind:project {item} bind:isSelected />
      {/each}
    </div>
    <div class="row">
      <div class="type">Astro + Svelte</div>
      {#each projects.astro as item}
        <ProjectThumbnail bind:project {item} bind:isSelected />
      {/each}
    </div>
  {/if}
</div>

<style>
  .type {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.8rem;
  }

  .row {
    position: relative;
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding: 50px 20px;
  }

  .projects {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 20px;
  }
</style>
