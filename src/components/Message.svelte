<script>
export let message;
</script>

<style>
  li {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    /*background: linear-gradient(to bottom right, var(--color-primary), var(--color-secondary));*/
    background: linear-gradient(to top right, var(--color-primary), var(--color-gray) 250%);
    width: 100%;
    height: 16rem;
    padding: 0.5rem;
    border-radius: var(--radius-medium);
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.2);
  }

  .icon {
    color: var(--color-light);
    font-size: 4rem;
    margin-top: -3rem;
  }

  footer {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    width: 100%;
    height: 5.5rem;
    color: #fff;
    background: rgba(46, 67, 146, .4);
    border-bottom-left-radius: var(--radius-medium);
    border-bottom-right-radius: var(--radius-medium);
    padding: 1rem;
  }

  span {
    width: 85%;
    font-size: 1.4rem;
    font-weight: 800;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .menu {
    font-size: 1.3rem;
  }
</style>

<li>
  <i class="icofont-file-text icon"></i>
  <footer>
    <span>
      {message.content.text}
    </span>
    <i class="icofont-navigation-menu menu"></i>
  </footer>
</li>
