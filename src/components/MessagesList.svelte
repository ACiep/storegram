<script>
import Message from './Message.svelte';

export let messages;
</script>

<style>
  h3 {
    font-size: 2rem;
    font-weight: 600;
    padding-bottom: 2rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 3rem;
  }
</style>

<h3>Files</h3>
<ul>
  {#each messages as message}
    <Message message={message}/>
  {:else}
    <div>No messages</div>
  {/each}
</ul>
