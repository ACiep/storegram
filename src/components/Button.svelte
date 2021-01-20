<script>
	export let fullWidth = false;
	export let plain = false;
</script>

<style>
	button {
    font-size: 1.2rem;
    color: #fff;
    background: var(--color-primary);
    padding: 1rem 2.25rem;
    border-radius: 2rem;
		transition: .25s;
    cursor: pointer;
	}

  .plain {
    color: var(--color-primary);
    background: #fff;
    border: 1px solid var(--color-primary);
  }

  .plain:hover {
    color: #fff;
    background: var(--color-primary);
  }

  .full-width {
    width: 100%;
  }
</style>

<button class:full-width={fullWidth} class:plain on:click>
	<slot></slot>
</button>
