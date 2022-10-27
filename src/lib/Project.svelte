<script>
  export let isSelected;
  export let project;

  let { title, description, stack, imgUrl, live, src } = project;

  function toggleProject() {
    isSelected = !isSelected;
  }
</script>

<div class="project">
  <div class="img" style="background-image: url({imgUrl});">
    <div class="back" on:click={toggleProject}>Back</div>
  </div>
  <div class="text">
    <div class="title">{title}</div>
    <div class="stack">
      {#each stack as item}
        <i class="devicon-{item}-plain" />
      {/each}
    </div>
    <div class="description">{description}</div>
    <div class="buttons">
      <a href={live} target="_blank">Live</a>
      <a href={src} target="_blank">Source</a>
    </div>
  </div>
</div>

<style>
  .project {
    display: flex;
    align-items: center;
    height: 690px;
  }
</style>
