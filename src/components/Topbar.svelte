<script>
import Input from './Input.svelte';
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--color-gray);
  }

  h1 {
    font-size: 2.75rem;
    font-weight: 800;
  }

  .search-form {
    width: 25rem;
  }
</style>

<header>
  <h1>Storegram</h1>
  <div class="search-form">
    <Input type="text" placeholder="search"/>
  </div>
</header>
