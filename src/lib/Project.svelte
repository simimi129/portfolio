<script>
  export let isSelected;
  export let project;

  let { title, description, stack, imgUrl, live, src } = project;

  function toggleProject() {
    isSelected = !isSelected;
  }
</script>

<div class="project">
  <div class="back" on:click={toggleProject} on:keypress={toggleProject}>
    <ion-icon class="icon" name="chevron-back-outline" />
  </div>
  <div class="img" style="background-image: url({imgUrl});" />
  <div class="text">
    <div class="title">{title}</div>
    <div class="stack">
      {#each stack as item}
        <i class="devicon-{item}-plain" />
      {/each}
    </div>
    <div class="description">{description}</div>
    <div class="buttons">
      <a class="button" href={live} target="_blank" rel="noreferrer">Live</a>
      <a class="button" href={src} target="_blank" rel="noreferrer">Source</a>
    </div>
  </div>
</div>

<style>
  .icon {
    visibility: visible;
    font-size: 2rem;
  }

  .back {
    padding: 10px;
    align-self: flex-start;
    color: var(--color-accent);
    cursor: pointer;
  }

  .project {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }

  .img {
    height: 300px;
    width: 300px;
    border-radius: 10px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .button {
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    color: var(--color-text);
    background-color: var(--color-accent);
  }

  .buttons {
    display: flex;
    gap: 20px;
    margin-top: 10px;
  }

  .title {
    font-size: 3rem;
    margin-bottom: 10px;
  }

  .stack {
    color: var(--color-text2);
    display: flex;
    gap: 20px;
    font-size: 2rem;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
