<script lang="ts">
	import axios from 'axios';

	let email = '';
	let password = '';

	let loading = false;
	let error = [false, ''];
	
	async function login() {
		if (email == '' || password == '') {
			error = [true, 'Both fields are required'];
			return;
		}
        const params = {
		email,
		password
	};
		const loginResponse = await axios
			.post('http://localhost:3000/auth/login', params)
			.then((res) => res)
			.catch((err) => err.response);
        console.log(loginResponse);
		if (loginResponse.status == 200) {
            localStorage.removeItem("ssecretId")
			localStorage.setItem('ssecretId', loginResponse.data.authToken);
			window.location.href = '/';
		}
		if (loginResponse.status == 404) {
			error = [true, loginResponse.data.message];
			return;
		}
        if (loginResponse.status == 400) {
			error = [true, loginResponse.data.message];
			return;
		}
	}
</script>

<div class=" text-white bg-slate-600 flex flex-col h-screen items-center justify-center ">
	<h1
		class="p-4 mb-20 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 transition-all hover:bg-gradient-to-l hover:scale-105 hover:cursor-pointer "
	>
		SuperSecret
	</h1>
	<p class=" text-xl mb-4">Login to your SuperSecret dashboard</p>
	<div  class="flex flex-col gap-5 text-slate-600 ">
		<input
            bind:value={email}
			class=" rounded-md w-96 focus:outline-none p-1"
			placeholder="Enter your mail"
			type="email"
		/>
		<input
            bind:value={password}
			class=" rounded-md w-96 focus:outline-none p-1"
			placeholder="Your super secret password"
			type="password"
		/>
        <button on:click={login} class=" text-white bg-blue-400 rounded p-1 my-3">
            {#if loading}
                <p>Loading</p>
            {:else}
                <p>Login</p>
            {/if}

        </button>
        {#if error}
        <p class="text-red-500 text-center" >
            {error[1]}
        </p>
        {/if}
	</div>
	<p>Don't have an account? <a href="/auth/register" class="text-blue-400">Register instead</a></p>
</div>
