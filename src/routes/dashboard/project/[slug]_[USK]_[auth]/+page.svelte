<script lang="ts">
	import type { PageData } from './$types';
	import Header from '../../../../components/Header.svelte'
  
	export let data: PageData;
	const variables = data.token
	let variablesArray: { key:string, value:string }[]
	const error = variables==false
	if(!error){
		variablesArray = variables.secrets
	}	

	let showValue = false


	function toggleShowValue(){
		showValue = !showValue;
	}

</script>


<div class="w-full h-full z-0 bg-slate-100 dark:bg-slate-800 p-4 overflow-y-auto pb-36" >
    <!-- top bar -->
    <div class="w-full flex pb-4 border-b border-slate-400 dark:border-slate-600 items-center ">
        <h1 class="text-3xl font-bold text-slate-700 dark:text-slate-300" >Project name secrets</h1>
        <button  class="ml-6 p-1 px-4 rounded-full bg-blue-100 dark:bg-slate-700 text-blue-400 dark:text-slate-400 hover:bg-blue-200 dark:hover:bg-slate-600 hover:text-blue-500 dark:hover:text-blue-300 transition-all" >New+</button>
    </div>

        <!-- secrets container -->
        <div class="flex flex-col mt-4 mx-4 sm:mx-6 md:mx-12 lg:mx-16 xl:mx-32 sm:p-4 transition-all  " >
            
		<!-- input new secret fields -->
		<div class="flex w-full items-center border-b border-slate-300 dark:border-slate-700"  >
			<!-- inputs -->
			<div class="w-full shrink grid grid-cols-2 py-2 sm:py-1   " >
				<input type="text" placeholder="KEY" class="h-10 rounded-lg m-2 col-span-2 sm:col-span-1 px-2 focus:outline-none dark:bg-slate-700 text-slate-700 dark:text-slate-200 placeholder-slate-400 caret-slate-700 dark:caret-slate-300 border border-slate-400 dark:border-slate-600 hover:border-slate-500  dark:focus:bg-slate-600 focus:border-slate-500 " />
				<input type="text" placeholder="VALUE" class="h-10 rounded-lg m-2 col-span-2 sm:col-span-1 px-2 focus:outline-none dark:bg-slate-700 text-slate-700 dark:text-slate-200 placeholder-slate-400 caret-slate-700 dark:caret-slate-300 border border-slate-400 dark:border-slate-600 hover:border-slate-500  dark:focus:bg-slate-600 focus:border-slate-500 " />
			</div>
			<!-- button -->
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 m-2 shrink-0 border-2 rounded-full text-green-600 dark:text-green-400 bg-white dark:bg-green-700 border-green-600 dark:border-green-400 hover:rotate-90 hover:scale-105 hover:cursor-pointer transition-all ">
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
			</svg>
		</div>

		

		<!-- secret fields component -->
		<div class="flex w-full items-center border-b border-slate-300 dark:border-slate-700"  >
			<!-- inputs -->
			<div class="w-full shrink grid grid-cols-2 py-2 sm:py-1   " >
				<div class="h-10 rounded-xl m-2 col-span-2 sm:col-span-1 flex items-center px-2 border bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-500 hover:border-slate-400  transition-all " >
					SECRET SHITTY KEY
				</div>
				<div class="h-10 rounded-xl m-2 col-span-2 sm:col-span-1 flex items-center px-2 border bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-500 hover:border-slate-400  transition-all " >
					SECRET SHITTY VALUE
				</div>
			</div>
			<!-- eye button -->
			<svg on:click={toggleShowValue} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={` ${ showValue ? 'hidden' : '' } w-10 h-10 m-2 p-1 shrink-0 border-2 rounded-full text-red-600 bg-white border-red-600 dark:text-red-400 dark:border-red-400 dark:bg-red-700 hover:scale-105 hover:cursor-pointer transition-all`} >
				<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
			</svg>
			<!-- eye slash button -->
			<svg on:click={toggleShowValue} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={` ${ !showValue ? 'hidden' : '' } w-10 h-10 m-2 p-1 shrink-0 border-2 rounded-full text-red-600 bg-white border-red-600 dark:text-red-400 dark:border-red-400 dark:bg-red-700 hover:scale-105 hover:cursor-pointer transition-all`}>
				<path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
			</svg>
		</div>

		
              

            
            

    </div>

</div>
