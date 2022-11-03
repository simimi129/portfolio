<div class="contact">
  <div class="contact-links">
    <div class="left">
      <a
        href="https://www.linkedin.com/in/simon-szabó-402924238/"
        target="_blank"
        rel="noreferrer"
        class="link"
      >
        <ion-icon name="logo-linkedin" class="icon" />
      </a>
      <a
        href="https://github.com/simimi129"
        target="_blank"
        rel="noreferrer"
        class="link"><ion-icon name="logo-github" class="icon" /></a
      >
    </div>
    <div class="right">
      <div class="contact-info">
        <ion-icon name="call-outline" class="icon" />
        <span>+36306489940</span>
      </div>
      <div class="contact-info">
        <ion-icon name="mail-outline" class="icon" />
        <span>simimi129@gmail.com</span>
      </div>
    </div>
  </div>
</div>

<style>
  .contact-info {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .icon {
    visibility: visible;
    color: var(--color-accent);
    font-size: 1.6rem;
  }

  .contact-links {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    padding: 0 8px;
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

  .contact {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 1;
    height: 40px;
    padding: 0 20px;
  }
</style>
