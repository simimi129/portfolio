<nav class="nav">
  <ul class="nav-links">
    <li class="nav-link">About</li>
    <li class="nav-link">Skills</li>
    <li class="nav-link">Projects</li>
    <li class="nav-link">Contact</li>
  </ul>
</nav>

<style>
  .nav-links {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    padding: 4px 0;
    background-color: #000;
    border-bottom: 1px solid #000;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    box-shadow: 0 22px 70px 4px rgba(0, 0, 0, 0.56),
      inset 0 0 0 1px var(--color-border);
  }

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 1;
  }
</style>
