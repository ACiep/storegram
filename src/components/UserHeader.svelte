<script>
import { getContext } from 'svelte';

const { user } = getContext('store');

let name = user.getName();

user.subscribe(self => {
  name = user.getName();
});
</script>

<style>
  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  figcaption {
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;
    margin: 7px 0;
  }

  .profile-pic {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
    background: #fff;
    border-radius: 50%;
  }

  .profile-pic-alt {
    font-size: 3.2rem;
    color: var(--color-gray);
  }
</style>

<figure>
  <div class="profile-pic">
    <i class="icofont-ui-user profile-pic-alt"></i>
  </div>
  <figcaption>{name}</figcaption>
</figure>
