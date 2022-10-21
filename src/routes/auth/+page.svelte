<script lang="ts" >
    import axios from "axios"
    const authUrl = "https://web-production-9c04.up.railway.app/auth/"
    const specialChars = ["!", "@", "#", "$", "%", "&", "*"]
    let authState = "Register"
    let err : [boolean | null | undefined , String]  = [false, ""]
    $: errorState = err

    function switchAuthState(){
        authState = authState==="Register"?"Login":"Register"
    }

    let email :string = ""
    let password :string = ""
    
    async function authenticate(){
        
        let passwordArr = [...password]

        if(email=="" || password==""){
            err = [true, "Email and password can't be empty"]
            return
        }

        if(![...email].includes('@')){
            err= [true, "Invalid email address"]
            return
        }
        
        if(authState==="Register"){
            if(password.length<8){
                err=[true, "Password must be at least 8 chars long"]
                return
            }

            let containUpperCase = false
            let containSpecialChar = false
            let containNum = false

            for( let char in passwordArr ){
                if( !Number.isInteger(Number(passwordArr[char])) && passwordArr[char].toUpperCase()===passwordArr[char]){
                    containUpperCase = true
                    break
                }
            }

            if(!containUpperCase){
                err=[true, "Password must contain at least one upper case"]
                return
            }

            for( let char in passwordArr ){
                if( Number.isInteger(Number(passwordArr[char]))){
                    containNum = true
                    break
                }
            }

            if(!containNum){
                err=[true, "Password must contain at least one numerical value"]
                return
            }

            for( const specialChar in specialChars ){
                for( const char in passwordArr ){
                    if( specialChars[specialChar]===passwordArr[char] ){
                        containSpecialChar=true
                        break
                    }
                }
            }

            if(!containSpecialChar){
                err= [true, "Password must contain at least one special char"]
                return
            }

            err=[false, ""]
        }
        const action = authState=="Register"?"register":"login"
        await axios.post(
            `${authUrl}${action}`,
            {
                email: email,
                password: password
            }
        )
        .then((res)=>{
            const { token, USK, user } = res.data
            localStorage.setItem("authToken", token)
            localStorage.setItem("USK", USK)
            localStorage.setItem("user", user)
            window.location.href="/dashboard"
        })
        .catch((authErr)=>{
            const { data } = authErr.response
            err=[true, data.message]
        })
        
    }
    
    let passwordVisible = false;

    function togglePasswordVisible(){
        passwordVisible = !passwordVisible;
    }

    

</script>

<div class="fixed w-full h-full flex flex-col justify-center items-center bg-slate-200 dark:bg-slate-900">
    <div class="w-[360px] sm:w-[540px] flex flex-col justify-center items-center p-4 transition-all" >
        <h2 class="font-bold poppins text-4xl sm:text-5xl xl:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 transition-all ">SuperSecret</h2>
        <input bind:value={email} type="text" placeholder="email" required={err[0]} class="w-full h-10 m-2 pl-2 rounded border required:border-red-500 dark:required:border-red-800 bg-slate-100 focus:bg-white dark:text-slate-200 dark:caret-slate-200 dark:bg-slate-800 dark:focus:bg-slate-700 dark:border-slate-700 dark:hover:border-slate-600 dark:focus:border-slate-600 border-slate-400 hover:border-slate-500 focus:border-slate-500 focus:outline-none" />
        <input bind:value={password} type="password" placeholder="password" required={err[0]} class="w-full h-10 m-2 pl-2 rounded border required:border-red-500 dark:required:border-red-800 bg-slate-100 focus:bg-white dark:text-slate-200 dark:caret-slate-200 dark:bg-slate-800 dark:focus:bg-slate-700 dark:border-slate-700 dark:hover:border-slate-600 dark:focus:border-slate-600 border-slate-400 hover:border-slate-500 focus:border-slate-500 focus:outline-none" />
        <span class={ `${ errorState[0] ? 'text-sm italic text-red-500 dark:text-red-700' : 'hidden' } ` } > { errorState[1] } </span>
        <!-- eye icon -->
        <!-- <span on:click={togglePasswordVisible} class={`${ passwordVisible === true ? 'material-icons-outlined' : 'material-icons-filled' } ${'text-slate-500 rounded-full hover:bg-slate-300 dark:hover:bg-slate-800 hover:cursor-pointer p-1'} `} >remove_red_eye</span> -->
        <button on:click={authenticate} class="w-full h-12 m-2 text-[20px] border-2 font-bold bg-gradient-to-r from-slate-100 to-slate-100 dark:from-slate-700 dark:to-slate-700 border-slate-500 dark:border-slate-500 text-slate-600 dark:text-slate-400 hover:border-slate-700 dark:hover:border-slate-300 hover:drop-shadow-lg dark:hover:drop-shadow-none hover:text-white dark:hover:text-slate-200 hover:from-sky-500 hover:via-puple-500 hover:to-pink-500 dark:shadow-lg dark:shadow-slate-600/50 dark:hover:shadow-slate-500/50 rounded transition-all" > 
            { authState === 'Register' ? 'Register' : 'Login' } 
        </button>
        <div class="flex mt-2" >
            <p class="text-slate-600 "> 
                { authState === 'Register' ? 'Already registered?' : 'Not yet registered?' } 
            </p>
            <button on:click={switchAuthState} class="ml-2 hover:cursor-pointer font-medium text-slate-400 hover:text-sky-500" > 
                { authState === 'Register' ? 'Login' : 'Register' } 
            </button>
        </div>
    </div>
    
    <div class="fixed bottom-0 w-screen h-6 flex items-center dark:bg-slate-800 bg-slate-300 ">
        <p class="ml-4 text-slate-500  text-sm">Copyright &copy; TheWisePigeon</p>

    </div>
    
</div>