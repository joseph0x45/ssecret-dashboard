<script lang="ts">
	import { browser } from '$app/environment';
	import axios from 'axios';
	import { onMount } from 'svelte';

	let userProjects: projectObject[] = [];
	let username: string;

	onMount(async () => {
		if (browser) {
			if (!localStorage.getItem('ssecretId')) {
				window.location.href = '/auth/login';
			}
			const fetchProjectsResult = (await fetchProjects()) as [projectObject];
			const usernameResult = await fetchUsername();
			username = usernameResult;
			let projectstmp: projectObject[] = [];
			fetchProjectsResult.map((project) => {
				projectstmp.push(project);
			});
			userProjects = projectstmp;
		}
	});

	async function fetchProjects() {
		return await axios
			.get('http://localhost:3000/project/fetch', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('ssecretId')}`
				}
			})
			.then((res) => {
				return res.data.data! as [projectObject];
			})
			.catch((err) => {
				return err.response;
			});
	}

	async function fetchUsername() {
		return await axios
			.get('http://localhost:3000/auth/username', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('ssecretId')}`
				}
			})
			.then((res) => {
				console.log(res.data.data.email);
				return res.data.data.email;
			});
	}

	interface projectObject {
		name: string
		collaborators: [string]
        _id: string
	}
</script>

<div class=" mt-5 text-center text-white text-2xl" >
	Welcome back {username}
</div>
<div class=" text-white text-xl flex justify-center m-auto" >
    <button class=" items-center bg-blue-300 rounded-md p-2 m-2 flex justify-between" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          
        <p class="mx-2" >New Project</p>
    </button>
</div>
<div class=" bg-slate-600 h-screen w-full ">
	<!-- <button on:click={fetchProjects} class="bg-red-400" >
        Test
    </button> -->
	{#if userProjects.length != 0}
		<div  class=" mt-10 m-auto flex justify-center gap-20 flex-wrap w-3/5 cursor-pointer">
			{#each userProjects as project}
				<a href={`/project/${project._id}`}>
                    <div
                        class="text-white border border-white h-60 w-60 text-center flex flex-col items-center justify-center rounded"
                    >
                        <p>{project.name}</p>
                        <p>{project.collaborators.length} collaborators/10</p>
                    </div>
                </a >
			{/each}
		</div>
	{:else}
		<div class=" text-white flex justify-center items-center h-screen animate-pulse">
			Loading projects
		</div>
	{/if}
</div>
