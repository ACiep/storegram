<script>
import { setContext } from 'svelte';
import { tdClient } from '../tdlib';
import { store } from '../stores/root';
import Login from './Login.svelte';
import Main from './Main.svelte';
import Loading from './Loading.svelte';

setContext('store', store);

const { user } = store;
let loading = false;
let error;

tdClient.init().catch(e => {
  console.error(e);
  error = e;
});
</script>

<style>
  :global(:root) {
		--color-primary: #0088cc;
    --color-secondary: #2e4392;
    --color-light: #e6e9ef;
    --color-gray: #cdcfd5;
    /*--color-dark: #1e1f20;*/
    --color-dark: #001926;
    --radius-medium: 0.5rem;
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(html) {
    color: var(--color-dark);
    font-size: 10px;
    font-family: Lato, Open Sans, sans-serif;
    margin: 0;
  }
</style>

<div>
	{#if loading}
		<Loading/>
	{:else if error}
		<p>Error :(</p>
	{:else if $user}
		<Main/>
	{:else}
		<Login/>
	{/if}
</div>
