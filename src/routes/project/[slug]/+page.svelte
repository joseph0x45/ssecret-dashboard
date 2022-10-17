<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const projectId = data.data.slug;


    async function createSecret(){

    }
</script>

<div class=" flex flex-col h-screen " >
    <div class=" w-full  flex  justify-around text-2xl text-white my-3 " >
        <h1>Project:{projectId}</h1>
    </div>
    <div class=" text-white h-full w-full" >
        <div class=" flex justify-around w-2/5 m-auto gap-4 mt-3 text-slate-600" >
            <input class=" w-3/6 focus:outline-none text-center" placeholder="Secret key" type="text">
            <input class=" w-3/6 focus:outline-none text-center" placeholder="Secret value" type="text">
            <button class=" bg-blue-400 rounded-md p-2">
                Add
            </button>
        </div>
    </div>
</div>
