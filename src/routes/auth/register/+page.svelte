<script lang="ts" >
import axios from "axios"
import type { AxiosResponse } from "axios"

let email = ""
let password = ""
let loading = false
let error = [false, ""]


async function register() {
    loading = true
    const params = {
        email,
        password
    }
    const registrationResponse = await axios.post(
        "http://localhost:3000/auth/register",
        params
    )
    .then((res)=>res)
    .catch((err)=>err.response)
    if(registrationResponse.status==200){
        localStorage.setItem("ssecretId", registrationResponse.data.token)
        window.location.href = "/"
    }
    if(registrationResponse.status==409){
        error=[true, registrationResponse.data.message]
        return
    }

}


</script>

<div class=" text-white bg-slate-600 flex flex-col h-screen items-center justify-center " >
    <h1 class="p-4 mb-20 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 transition-all hover:bg-gradient-to-l hover:scale-105 hover:cursor-pointer ">
        SuperSecret
    </h1>
    <p class=" text-xl mb-4" >Create your SuperSecret Account</p>
    <div class="flex flex-col gap-5 text-slate-600 " >
        <input bind:value={email} class=" rounded-md w-96 focus:outline-none p-1" placeholder="Enter your mail" type="email">
        <input bind:value={password} class=" rounded-md w-96 focus:outline-none p-1" placeholder="Your super secret password" type="password">
        <button on:click={register} class=" text-white bg-blue-400 rounded p-1 my-3">
            {#if loading}
                <p>Loading</p>
            {:else}
                <p>Register</p>
            {/if}

        </button>
        {#if error}
        <p class="text-red-500 text-center" >
            {error[1]}
        </p>
        {/if}
    </div>
    <p>Already have an account? <a href="/auth/login" class="text-blue-400">Login instead</a> </p>
</div>