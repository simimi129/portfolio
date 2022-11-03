<script>
  export let project;
  export let item;
  export let isSelected = false;

  function toggleProject() {
    isSelected = !isSelected;
    project = item;
    console.log(project);
  }
</script>

<div
  class="project"
  style="background-image: url({item.imgUrl});"
  on:click={toggleProject}
  on:keypress={toggleProject}
/>

<style>
  .project {
    width: 222px;
    height: 222px;
    border-radius: 10px;
    transition: all 0.2s ease-out;
    background-color: gray;
    background-position: center;
    background-size: cover;
  }

  .project:hover {
    transform: scale(1.2);
    box-shadow: 0 22px 70px 4px rgba(0, 0, 0, 0.56);
  }
</style>
