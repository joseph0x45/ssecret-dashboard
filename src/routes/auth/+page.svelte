<script>
    const authUrl = ""
    let authState = "Register"
    let err = [false, ""]
    $: errorState = err

    function switchAuthState(){
        authState = authState==="Register"?"Login":"Register"
    }

    let email = ""
    let password = ""

    function authenticate(){
        if(email=="" || password==""){
            
        }
    }

</script>

<div class="w-screen relative h-screen flex flex-col justify-center items-center bg-slate-200 dk:bg-slate-800">
    <div class="w-[540px] flex flex-col justify-center items-center p-4" >
        <h2 class="font-bold text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-puple-500 to-pink-500">SuperSecret</h2>
        <input type="text" placeholder="email" required class="w-full h-10 m-2 pl-2 rounded border bg-slate-100 focus:bg-white border-slate-400 hover:border-slate-500 focus:border-slate-500 focus:outline-none" />
        <input type="password" placeholder="password" required class="w-full h-10 m-2 pl-2 rounded border bg-slate-100 focus:bg-white border-slate-400 hover:border-slate-500 focus:border-slate-500 focus:outline-none" />
        <button type="submit" class="w-full h-12 m-2 text-[20px] border-2 font-bold bg-gradient-to-r from-slate-100 to-slate-100 border-slate-500 text-slate-600 hover:border-slate-700 hover:drop-shadow-lg hover:text-white hover:from-sky-500 hover:via-puple-500 hover:to-pink-500  rounded transition-all" > 
            { authState === 'Register' ? 'Register' : 'Login' } 
        </button>
        <div class="flex" >
            <p class="text-slate-600"> 
                { authState === 'Register' ? 'Already registered?' : 'Not yet registered?' } 
            </p>
            <button on:click={switchAuthState} class="ml-2 hover:cursor-pointer font-medium text-slate-400 hover:text-sky-500" > 
                { authState === 'Register' ? 'Login' : 'Register' } 
            </button>
        </div>
    </div>
    
    <div class="fixed bottom-0 w-screen h-6 flex items-center bg-slate-300 ">
        <p class="ml-4 text-slate-500 text-sm">Copyright &copy; TheWisePigeon</p>

    </div>
    
</div>