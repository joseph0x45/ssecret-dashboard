<script lang="ts" >
import axios from "axios"


</script>

<div class=" text-white bg-slate-600 flex flex-col h-screen items-center justify-center " >
    <h1 class="p-4 mb-20 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 transition-all hover:bg-gradient-to-l hover:scale-105 hover:cursor-pointer ">
        SuperSecret
    </h1>
    <p class=" text-xl mb-4" >Create your SuperSecret Account</p>
    <div class="flex flex-col gap-5 text-slate-600 " >
        <input class=" rounded-md w-96 focus:outline-none p-1" placeholder="Enter your mail" type="text">
        <input class=" rounded-md w-96 focus:outline-none p-1" placeholder="Your super secret password" type="text">
    </div>
    <p>Already have an account? <a href="/auth/login" class="text-blue-400">login instead</a> </p>
</div>