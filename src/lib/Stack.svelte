<div class="exp-stack-bar">
  <div class="stack-items">
    <div class="frontend card">
      <span class="title">Frontend</span>
      <div class="items">
        <div class="stack-item">
          <i class="devicon-html5-plain colored" />
          <span>HTML</span>
        </div>
        <div class="stack-item">
          <i class="devicon-css3-plain colored" />
          <span>CSS</span>
        </div>
        <div class="stack-item">
          <i class="devicon-javascript-plain colored" />
          <span>JavaScript</span>
        </div>
        <div class="stack-item">
          <i class="devicon-react-plain colored" />
          <span>React</span>
        </div>
        <div class="stack-item">
          <i class="devicon-svelte-plain colored" />
          <span>Svelte</span>
        </div>
      </div>
    </div>
    <div class="backend card">
      <span class="title">Backend</span>
      <div class="items">
        <div class="stack-item">
          <i class="devicon-go-original-wordmark colored" />
          <span>Go</span>
        </div>
        <div class="stack-item">
          <i class="devicon-nodejs-plain colored" />
          <span>Node.js</span>
        </div>
        <div class="stack-item">
          <i class="devicon-java-plain colored" />
          <span>Java</span>
        </div>
        <div class="stack-item">
          <i class="devicon-postgresql-plain colored" />
          <span>PostgreSQL</span>
        </div>
        <div class="stack-item">
          <i class="devicon-firebase-plain colored" />
          <span>Firebase</span>
        </div>
      </div>
    </div>
    <div class="other card">
      <span class="title">Other</span>
      <div class="items">
        <div class="stack-item">
          <i class="devicon-swift-plain colored" />
          <span>Swift</span>
        </div>
        <div class="stack-item">
          <i class="devicon-git-plain colored" />
          <span>Git</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .title {
    color: var(--color-accent);
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .items {
    display: flex;
    justify-content: center;
    background: linear-gradient(
      to bottom right,
      #0c1727 0%,
      #273446 35%,
      #272c3a 65%,
      #020615 100%
    );
    height: 240px;
    width: 240px;
    flex-wrap: wrap;
    padding: 20px;
    border-radius: 15px;
    gap: 20px;
  }

  .stack-item span {
    font-size: 0.7rem;
    color: var(--color-text2);
  }

  .stack-item {
    font-size: 2.4rem;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .stack-items {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 40px;
  }

  .exp-stack-bar {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    margin-bottom: 80px;
    gap: 40px;
  }
</style>
