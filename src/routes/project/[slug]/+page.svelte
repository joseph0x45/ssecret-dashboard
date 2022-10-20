<script lang="ts">
	import type { PageData } from './$types';
    import { onMount } from 'svelte';
    import axios from "axios"
	import { browser } from '$app/environment';
    import Secret from '../../../components/Secret.svelte';

	export let data: PageData;
	const projectId = data.data.slug;
    let secrets: secretObject[] = []

    onMount( async ()=>{
        if(browser){
            const fetchSecretsResult = await fetchSecrets() as secretObject[]
            console.log(fetchSecretsResult)
            let secretstmp : secretObject[] = []
            fetchSecretsResult.map((secret)=>{
                secretstmp.push(secret)
            })
            secrets = secretstmp
            console.log(secrets);
            
        }
    })

    async function fetchSecrets(){
        const response = await axios.post(
            "http://localhost:3000/project/fetch/secrets",
            {
                project: projectId
            },
            {
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("ssecretId")}`
                }
            }
        )
        .then((res)=>res.data.data.secrets! as secretObject[])
        .catch((err)=>err.response)
        return response
    }


    async function createSecret(){

    }

    interface secretObject{
        key: string
        value: string
    }
</script>

