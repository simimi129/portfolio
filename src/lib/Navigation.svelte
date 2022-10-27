<nav class="nav">
  <ul class="nav-links">
    <li><a href="#about" class="nav-link">About</a></li>
    <li><a href="#skills" class="nav-link">Skills</a></li>
    <li><a href="#experience" class="nav-link">Experience</a></li>
    <li><a href="#projects" class="nav-link">Projects</a></li>
    <li><a href="#contact" class="nav-link">Contact</a></li>
  </ul>
</nav>

<style>
  .nav-link {
    color: var(--color-text);
    text-decoration: none;
  }

  .nav-links {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    padding: 4px 0;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(30px) saturate(100%) contrast(100%) brightness(90%);
    -webkit-backdrop-filter: blur(30px) saturate(100%) contrast(100%)
      brightness(90%);
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
