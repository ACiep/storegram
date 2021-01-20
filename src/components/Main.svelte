<script>
import { getContext, onMount, beforeUpdate } from 'svelte';
import { get } from 'svelte/store';
import Button from './Button.svelte';
import Loading from './Loading.svelte';
import MessagesList from './MessagesList.svelte';
import Sidebar from './Sidebar.svelte';
import Topbar from './Topbar.svelte';

const { messages } = getContext('store');

onMount(() => {
  messages.init();
});
</script>

<style>
	.wrapper {
		background: #f9f9f9;
	}

  main {
    margin-left: 180px;
    padding: 0 35px;
  }
</style>

<div class="wrapper">
	<Sidebar/>
	<main>
		{#if $messages.loading}
			<Loading/>
		{:else if $messages.error}
			<div>Error occurred.</div>
		{:else}
      <Topbar/>
      <MessagesList messages={$messages.data}/>
		{/if}
	</main>
</div>
