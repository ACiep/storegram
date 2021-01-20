<script>
import { getContext } from 'svelte';
import { tdClient } from '../tdlib';
import Button from './Button.svelte';
import UserHeader from './UserHeader.svelte';

const store = getContext('store');

const links = [
  {
    label: '+ Note',
    action: () => {
      console.log('New folder');
    },
  },
  {
    label: '+ Upload',
    action: () => {
      console.log('Upload');
    },
  },
  {
    label: 'Logout',
    action: () => {
      store.user.logout();
    },
  },
];
</script>

<style>
  .root {
    position: fixed;
    height: 100vh;
    width: 180px;
    background: var(--color-light);
    border-right: 1px solid var(--color-gray);
    padding: 2rem;
  }

  .user-header-wrapper {
    padding-bottom: 2rem;
    border-bottom: 2px solid var(--color-gray);
  }
</style>

<aside class="root">
  <div class="user-header-wrapper">
    <UserHeader/>
  </div>
  <!--
  <SidebarActions/>
  <HashtagsList/>
  -->
</aside>
