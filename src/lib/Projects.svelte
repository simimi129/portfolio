<script>
  import Project from "./Project.svelte";

  let isSelected = false;

  let project = {
    title: "Dashboard",
    description: "Basic admin dashboard usin React and MaterialUI",
    stack: ["html5", "css3", "javascript", "react"],
    imgUrl: "../assets/art.webp",
    live: "https://demo-dashboard-react-mui.netlify.app",
    src: "https://github.com/simimi129/admin-dashboard",
  };

  function toggleProject() {
    isSelected = !isSelected;
  }
</script>

<div class="projects">
  {#if isSelected}
    <Project {project} bind:isSelected />
  {:else}
    <div class="row">
      <div class="project" on:click={toggleProject} />
      <div class="project" />
      <div class="project" />
      <div class="project" />
    </div>
    <div class="row">
      <div class="project" />
      <div class="project" />
      <div class="project" />
      <div class="project" />
    </div>
    <div class="row">
      <div class="project" />
      <div class="project" />
      <div class="project" />
      <div class="project" />
    </div>
  {/if}
</div>

<style>
  .project {
    width: 222px;
    height: 222px;
    border-radius: 10px;
    transition: all 0.2s ease-out;
    background-color: gray;
  }

  .project:hover {
    transform: scale(1.2);
    box-shadow: 0 22px 70px 4px rgba(0, 0, 0, 0.56);
  }

  .row {
    display: flex;
    gap: 12px;
  }

  .projects {
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 690px;
  }
</style>
