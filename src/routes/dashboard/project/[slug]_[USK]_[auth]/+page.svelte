<script lang="ts">
	import type { PageData } from './$types';
  
	export let data: PageData;
	const variables = data.token
	let variablesArray: { key:string, value:string }[]
	const error = variables==false
	if(!error){
		variablesArray = variables.secrets
		
	}	
</script>
  
