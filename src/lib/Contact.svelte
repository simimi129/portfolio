<script>
  let form;
  let isSubmitDisabled = false;
  async function submit(e) {
    var data = new FormData(e.target);
    fetch(e.target.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          isSubmitDisabled = true;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
</script>

<form
  class="form"
  bind:this={form}
  on:submit|preventDefault={submit}
  method="POST"
  action="https://formspree.io/f/mqknrkov"
>
  <input class="input" type="text" placeholder="Name" name="name" />
  <input class="input" type="email" placeholder="Email" name="email" />
  <input class="input" type="text" placeholder="Phone" name="phone" />
  <textarea class="input" placeholder="Message" name="message" />
  <button
    class="btn-submit"
    class:disabled={isSubmitDisabled}
    type="submit"
    on:click={() => (isSubmitDisabled = true)}
  >
    {#if isSubmitDisabled}
      Sent
    {:else}
      Send
    {/if}
    <ion-icon class="icon" name="send-outline" />
  </button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
    gap: 10px;
    padding: 20px 20px 0 20px;
  }

  .icon {
    visibility: visible;
    font-size: 1.2rem;
    pointer-events: none;
  }

  .btn-submit {
    font-weight: 300;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--color-accent);
    text-decoration: none;
    padding: 10px;
    margin-top: 10px;
    width: 100px;
    border-radius: 6px;
    border: 0;
    transition: all 0.2s;
    cursor: pointer;
    background-color: transparent;
    align-self: flex-end;
  }

  .btn-submit:hover > .icon {
    margin-left: 2px;
  }

  input {
    color: var(--color-text);
    font-size: 1rem;
    padding: 20px;
    background: transparent;
    border: 0;
    border-bottom: 1px solid var(--color-border);
    outline: none;
  }

  *::placeholder {
    color: var(--color-text);
  }

  textarea {
    color: var(--color-text);
    resize: none;
    font-size: 1rem;
    padding: 20px;
    background: transparent;
    border: 0;
    border-bottom: 1px solid var(--color-border);
    outline: none;
    overflow-y: scroll;
  }
</style>
