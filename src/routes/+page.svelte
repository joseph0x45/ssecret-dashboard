<script lang="ts">
	import { browser } from '$app/environment';
	import axios from 'axios';
	import { onMount } from 'svelte';

	let userProjects: projectObject[] = [];
	let username: string;

	

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

<div>
	bruh
</div>