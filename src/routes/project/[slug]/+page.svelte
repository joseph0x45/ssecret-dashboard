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

<div class=" flex flex-col h-screen " >
    <div class=" w-full  flex  justify-around text-2xl text-white my-3 " >
        <h1>Project ID : {projectId}</h1>
    </div>
    <div class=" text-white h-full w-full" >
        <div class=" flex justify-around w-2/5 m-auto gap-4 mt-3 text-slate-600" >
            <input class=" w-3/6 focus:outline-none text-center" placeholder="Secret key" type="text">
            <input class=" w-3/6 focus:outline-none text-center" placeholder="Secret value" type="text">
            <button class=" bg-blue-400 rounded-md p-2">
                Add
            </button>
        </div>
        {#each secrets as secret}
            <Secret secret={secret} />
        {/each}
    </div>
</div>
