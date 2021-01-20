<script>
	export let name;
	export let placeholder = '';
	export let value = '';
</script>

<style>
  input {
    width: 100%;
    font-size: 1.2rem;
    padding: 1rem 1.5rem;
    background: #fff;
    border: 1px solid var(--color-gray);
    border-radius: 2rem;
  }
</style>

<input
	name={name}
	placeholder={placeholder}
	bind:value
>
