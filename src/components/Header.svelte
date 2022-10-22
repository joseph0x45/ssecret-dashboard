<script lang="ts" >

    import { onMount } from "svelte"
    import { browser } from "$app/environment"

    let userEmail: string
    onMount( async ()=>{
        if(browser){
            userEmail = localStorage.getItem("user") as string
        }
    })

</script>

<nav class="z-50 sticky top-0 w-full h-24 sm:h-32 px-4 flex justify-between items-center border-b border-slate-300 dark:border-slate-700 bg-slate-200  dark:bg-slate-900 transition-all" >
    <h2 class="font-bold poppins text-3xl sm:text-4xl xl:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 transition-all ">SuperSecret</h2>
    <div class="font-medium flex rounded-full p-1 px-2 bg-slate-300 dark:bg-slate-800 text-slate-800 dark:text-slate-300 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4  sm:h-6 sm:w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 class="  text-[12px] sm:text-[14px] md:text-[16px] transition-all" >{userEmail}</h2>
    </div>
</nav>