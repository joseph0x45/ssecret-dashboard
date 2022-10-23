<script lang="ts">
	const api_url = "https://web-production-9c04.up.railway.app/project/create/secret"

	import type { PageData } from './$types';
	import { secrets } from '../../../../stores/stores';
	import Secret from '../../../../components/Secret.svelte';
	// import Footer from '../../../../components/Footer.svelte';
	import axios from 'axios';
	export let data: PageData;
	const variables = data.token;
	const project = data.project
	let variablesArray: { key: string; value: string }[];
	secrets.subscribe((value) => {
		variablesArray = value;
	});
	const error = variables == false;
	if (!error) {
		variablesArray = variables.secrets;
		secrets.set(variablesArray);
	}

	let key: string = ""
	let value: string = ""

	async function createNewSecret(){
		const response = await axios.post(
			api_url,
			{
				key: key,
				value: value,
				project: project,
				USK: localStorage.getItem("USK")
			},
			{
				headers:{
					Authorization: `Bearer ${localStorage.getItem("authToken")}`
				}
			}
		)
		.then((res)=>{
			const { data } = res.data
			secrets.set([...$secrets, { key:key, value:value } ])
			key=""
			value=""
			return
		})
		.catch((err)=>{
			const { data } = err.response
			alert(`Something went wrong, try again ${data.message}`)
		})
	}
</script>

<div class="w-full h-full z-0 bg-slate-100 dark:bg-slate-800 p-4 overflow-y-auto pb-36">
	<!-- top bar -->
	<div class="w-full flex pb-4 border-b border-slate-400 dark:border-slate-600 justify-between items-center text-ellipsis  px-4 sm:px-0 ">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<svg on:click={()=>{ window.location.href="/dashboard" }} xmlns="http://www.w3.org/2000/svg" class="w-10 shrink-0 h-10 mr-4 sm:mr-0 sm:ml-4 rounded-full text-slate-700  dark:hover:bg-slate-500 hover:text-slate-700 dark:text-slate-600 dark:hover:text-slate-400 hover:-translate-x-1 hover:scale-110 hover:cursor-pointer transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
		</svg> 
		<div class="group flex items-center" >
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class='has-tooltip'>
				<span class='tooltip opacity-90 rounded-lg shadow-lg p-1 px-2 sm:p-2  dark:bg-slate-900 text-slate-500 mt-10 mr-24 transition-all'>Click to copy CLI script </span>
				<svg on:click={()=>{ navigator.clipboard.writeText(` npx @thepisewigeon/sscli ${project} `) }}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="z-50 rounded-full p-1 mr-1 text-slate-400  hover:text-slate-600 dark:text-slate-500  dark:hover:text-slate-300 hover:cursor-pointer w-8 h-8 transition-all ">
					<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
				</svg>
			</div>
			
			<h1 class="text-lg md:text-3xl sm:text-2xl shrink text-right px-2  font-bold text-slate-700 dark:text-slate-300">Project ID: {project} </h1>

			
			
		</div>
		
		
	</div>

	<!-- secrets container -->
	<div class="flex flex-col mt-4 mx-4 sm:mx-6 md:mx-12 lg:mx-16 xl:mx-32 sm:p-4 transition-all  ">
		<!-- input new secret fields -->
		<div class="flex w-full items-center border-b border-slate-300 dark:border-slate-700">
			<!-- inputs -->
			<div class="w-full shrink grid grid-cols-2 py-2 sm:py-1   ">
				<input
					bind:value={key}
					type="text"
					placeholder="KEY"
					class="h-10 rounded-lg m-2 col-span-2 sm:col-span-1 px-2 focus:outline-none dark:bg-slate-700 text-slate-700 dark:text-slate-200 placeholder-slate-400 caret-slate-700 dark:caret-slate-300 border border-slate-400 dark:border-slate-600 hover:border-slate-500  dark:focus:bg-slate-600 focus:border-slate-500 "
				/>
				<input
					bind:value={value}
					type="text"
					placeholder="VALUE"
					class="h-10 rounded-lg m-2 col-span-2 sm:col-span-1 px-2 focus:outline-none dark:bg-slate-700 text-slate-700 dark:text-slate-200 placeholder-slate-400 caret-slate-700 dark:caret-slate-300 border border-slate-400 dark:border-slate-600 hover:border-slate-500  dark:focus:bg-slate-600 focus:border-slate-500 "
				/>
			</div>
			<!-- button -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<svg
				on:click={createNewSecret}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-10 h-10 m-2 shrink-0 border-2 rounded-full text-green-600 dark:text-green-400 bg-white dark:bg-green-700 border-green-600 dark:border-green-400 hover:rotate-90 hover:scale-105 hover:cursor-pointer transition-all "
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
			</svg>
		</div>

		<!-- secret fields component -->
		{#each $secrets as secret}
			<Secret key={secret.key} value={secret.value} />
		{/each}
	</div>
</div>
