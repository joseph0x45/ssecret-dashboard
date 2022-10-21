<script lang="ts" >
    export let name: string
    export let id: string
    export let projectName: string

    $: nameMatched = name===projectName
    function copyID(){
        navigator.clipboard.writeText((id))
    }

    function viewSecrets(){
        window.location.href=`/dashboard/project/${id}_${localStorage.getItem("USK")}_${localStorage.getItem("authToken")}`
    }
    
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class={` ${nameMatched?"animate-pulse border-red-400 dark:border-red-800":""} z-10 relative w-60 h-48 rounded-xl border-2 p-4 m-2 grow sm:grow-0  dark:border-slate-600 bg-slate-200 dark:bg-slate-700 hover:drop-shadow-md dark:hover:drop-shadow-none dark:hover:shadow-lg dark:hover:shadow-slate-600/50  transition-all `} >
    <h1 on:click={viewSecrets} class="bg-slate-300 dark:bg-slate-600 text-slate-800 dark:text-slate-300 rounded-lg px-2 text-lg hover:border hover:border-slate-400 dark:hover:border-slate-500  hover:cursor-pointer" >{name}</h1>
    <p class="px-2 my-1 bg-slate-400 text-slate-600 dark:bg-slate-500 dark:text-slate-400 rounded-full truncate" >{id}</p>
    <!-- color circles -->
    <div class="z-10 absolute group bottom-4 left-4" >
        <div  class="z-40 absolute group left-0 bottom-0 w-8 h-8 rounded-full flex items-center justify-center bg-slate-200 dark:bg-slate-600 border-2 border-slate-700 dark:border-slate-400 group-hover:border-slate-200 dark:group-hover:border-slate-700 group-hover:bg-slate-500 group-hover:scale-110 hover:scale-120 group-hover:rotate-90 hover:cursor-pointer transition-all " >
            <span class="material-icons text-slate-700 group-hover:text-slate-200 dark:text-slate-400 dark:group-hover:text-slate-700 " >add</span>
        </div>
        <div class="z-30 absolute left-4 bottom-0 w-8 h-8 rounded-full bg-sky-400 border-2 border-sky-800 dark:bg-sky-700 dark:border-sky-500 group-hover:translate-x-1 transition-all" ></div>
        <div class="z-20 absolute left-8 bottom-0 w-8 h-8 rounded-full bg-purple-400 border-2 border-purple-800 dark:bg-purple-700 dark:border-purple-500 group-hover:translate-x-2 transition-all" ></div>
        <div class="z-10 absolute left-12 bottom-0 w-8 h-8 rounded-full bg-pink-400 border-2 border-pink-800 dark:bg-pink-700 dark:border-pink-500 group-hover:translate-x-3 transition-all" ></div>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <svg on:click={copyID}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="z-50 rounded-full p-1 text-slate-400 hover:bg-slate-300 hover:text-slate-600 dark:text-slate-500 dark:hover:bg-slate-600 dark:hover:text-slate-400 hover:cursor-pointer w-8 h-8 transition-all absolute bottom-4 right-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
    </svg>
</div>