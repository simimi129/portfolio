<div class="timeline">
  <div class="header">
    <span class="header-title">Work</span>
    <div class="placeholder" />
    <span class="header-title">Education</span>
  </div>
  <div class="time">
    <div class="time-header">
      <div class="work-year">Now -</div>
      <div class="year-dot" />
      <div class="education-year">- Now</div>
    </div>
    <div class="time-body">
      <div class="work">
        <div class="work-title">Capture.europe</div>
        <div class="work-type">Full-stack web developer</div>
        <div class="work-description">Java, Angular, Oracle, PostgreSQL</div>
      </div>
      <div class="year" />
      <div class="education">
        <div class="education-title">Self-Education</div>
        <div class="education-type">Software Architecure</div>
        <div class="education-description">
          Currently learning design patterns, software architecture and
          practicing my React skills with serverless firebase and node.
        </div>
      </div>
    </div>
  </div>
  <div class="time">
    <div class="time-header">
      <div class="work-year">2022 -</div>
      <div class="year-dot" />
      <div class="education-year">- 2022</div>
    </div>
    <div class="time-body">
      <div class="work">
        <div class="work-title">Oracle</div>
        <div class="work-type">Frontend Developer</div>
        <div class="work-description">Preact</div>
      </div>
      <div class="year" />
      <div class="education">
        <div class="education-title">Self-Education</div>
        <div class="education-type">Full-stack Development</div>
        <div class="education-description">
          Studied component-based frontend frameworks: Svelte, React and Node.js
          for backend. I used MongoDB for database. Also Git. I was focusing on
          frontend since i liked it more.
        </div>
      </div>
    </div>
  </div>
  <div class="time">
    <div class="time-header">
      <div class="work-year" />
      <div class="year-dot" />
      <div class="education-year">- 2021</div>
    </div>
    <div class="time-body">
      <div class="work" />
      <div class="year" />
      <div class="education">
        <div class="education-title">ELTE University</div>
        <div class="education-type">Computer Science BSc</div>
        <div class="education-description">
          Studied advanced OOP with Java, web programming with JavaScript and
          algorithms and data structures.
        </div>
      </div>
    </div>
  </div>
  <div class="time">
    <div class="time-header">
      <div class="work-year" />
      <div class="year-dot" />
      <div class="education-year">- 2020</div>
    </div>
    <div class="time-body">
      <div class="work" />
      <div class="year" />
      <div class="education">
        <div class="education-title">ELTE University</div>
        <div class="education-type">Computer Science BSc</div>
        <div class="education-description">
          Studied C, C++ for imperative and object-oriented programming, Haskell
          for functional programming.
        </div>
      </div>
    </div>
  </div>
  <div class="time">
    <div class="time-header">
      <div class="work-year" />
      <div class="year-dot" />
      <div class="education-year">- 2019</div>
    </div>
    <div class="time-body">
      <div class="work" />
      <div class="year-last" />
      <div class="education">
        <div class="education-title">ELTE University</div>
        <div class="education-type">Computer Science BSc</div>
        <div class="education-description">
          Started attending uni, before that i was doing a little bit of C# and
          HTML CSS coding.
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .year-dot {
    background-color: var(--color-accent);
    width: 19px;
    height: 19px;
    border-radius: 10px;
    margin: 0 10px;
  }

  .education {
    padding-left: 20px;
    margin-top: 10px;
    width: 100%;
  }

  .year,
  .year-last {
    background-color: var(--color-accent);
    width: 14px;
    margin: 0 20px;
    position: relative;
    height: 200px;
  }

  .year-last {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    height: 160px;
  }

  .work-description,
  .education-description {
    font-weight: 300;
  }

  .work-type,
  .education-type {
    margin-bottom: 6px;
    color: var(--color-text2);
  }

  .work-title,
  .education-title {
    font-size: 1.4rem;
    margin-bottom: 6px;
  }

  .work {
    text-align: right;
    padding-right: 20px;
    margin-top: 10px;
    width: 100%;
  }

  .time-body {
    display: flex;
  }

  .work-year,
  .education-year {
    min-width: 52px;
    color: var(--color-accent);
  }

  .time-header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .time {
    display: flex;
    flex-direction: column;
  }

  .placeholder {
    width: 40px;
  }

  .header-title {
    min-width: 200px;
    text-decoration: underline;
  }

  .header-title:first-child {
    text-align: right;
  }

  .header {
    display: flex;
    font-size: 1.8rem;
    margin-bottom: 20px;
  }

  .timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
  }
</style>
