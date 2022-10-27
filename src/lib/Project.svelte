<script>
  export let project;
</script>

<div class="project">
  <div class="img" style="background-image: url({project.imgUrl});" />
  <div class="text">
    <div class="title">{project.title}</div>
    <div class="stack">
      {#each project.stack as item}
        <i class={item} />
      {/each}
    </div>
    <div class="description">{project.description}</div>
    <div class="buttons">
      <a href={project.live}>Live</a>
      <a href={project.src}>Source</a>
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
