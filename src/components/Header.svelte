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
    <h2 class="text-slate-800 dark:text-slate-300 font-medium rounded-full p-1 px-2 bg-slate-300 dark:bg-slate-800 text-[12px] sm:text-[14px] md:text-[16px] transition-all" >{userEmail}</h2>
</nav>