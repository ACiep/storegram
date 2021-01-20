<script>
import Input from './Input.svelte';
import Button from './Button.svelte';
import * as authService from '../services/auth.js';

let status = 'phone_number';
let inputValue = '';

function onSubmit(event) {
  event.preventDefault();

  if (status === 'phone_number') {
    authService.setAuthenticationPhoneNumber(inputValue.trim())
      .then(res => {
        console.log(res);
        inputValue = '';
        status = 'auth_code';
      })
      .catch(console.log);
  } else if (status === 'auth_code') {
    authService.checkAuthenticationCode(inputValue);
    inputValue = '';
    status = 'done';
  }
}
</script>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
    text-align: center;
		width: 100vw;
		height: 100vh;
	}

  form {
    width: 25rem;
  }

  h1 {
    font-size: 2.75rem;
    font-weight: 800;
  }

  section {
    width: 100%;
    margin: 1rem 0;
    font-size: 1.4rem;
  }

	.telegram-link {
		color: #0088cc;
	}
</style>

<div class="wrapper">
	<form on:submit={onSubmit}>
		<h1>Storegram</h1>
		<section>
			<p>Free, unlimited cloud drive.</p>
			<p>
				Backed by <a href="https://telegram.org/" target="_blank" class="telegram-link">Telegram</a>.
			</p>
		</section>
		<section>
		  <Input
		  	placeholder={status === 'phone_number'
		  		? "Enter your phone number..."
		  		: "Enter code you received"
		  	}
		  	bind:value={inputValue}
		  />
		</section>
		<Button plain>Next</Button>
	</form>
</div>
