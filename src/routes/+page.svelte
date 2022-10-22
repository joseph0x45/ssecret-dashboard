<script lang="ts" >
    import axios from "axios"
    const url = "https://web-production-22d3.up.railway.app/store"
    let email: string = ""
    let githubHandle: string = ""

    let requestedDev= false

    async function requestAccess(){
        if(email=="" || githubHandle=="" ){
            alert("Both fields have to be filled")
            return
        }
        const params = {
            email,
            githubHandle
        }
        axios.post(
            url,
            params
        )
        requestedDev= true
        email=""
        githubHandle=""
        
    }



</script>

<div class=" flex flex-col  w-full text-white p-4 bg-slate-200 dark:bg-slate-900">
	<!-- Header -->
	<div class="  text-xs lg:text-xl flex justify-around w-full items-baseline mb-3">
		<div class="  font-extrabold lg:text-3xl">ᕙSuperSecretᕗ</div>
		<div class="gap-3 flex justify-between ">
			<div >
                <a href="#dev">
                    Developers
                </a>
            </div>
			<div class=" font-extrabold">|</div>
			<div >
                <a href="#started">
                    Get Started
                </a>
            </div>
		</div>
	</div>
    <hr>
	<!-- Call to action -->
	<div class="  text-center mt-20 space-y-10">
		<div>
            <p class="text-5xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-red-600">
                Break free from the <span class=" text-red-500">burden</span> of managing .env files <br />
            </p>
        </div>
		<div>
            <p class=" text-2xl">
                SuperSecret helps you manage and share your environment variables, <span
                    class=" font-semibold text-green-500">Easily and Securely.</span
                >
            </p>
        </div>
		<div class="" >
            <a href="/auth" >
                <button class="p-2 bg-green-500 rounded-md hover:scale-110 ease-in duration-200"> Get Started </button>
            </a>
        </div>
	</div>
    <span class="h-20" ></span>
    <!-- How will it work -->
    <div class=" text-center flex justify-center space-x-4 items-center text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-green-300" >
        <div class=" h-px bg-white w-20" ></div>
        <div class=" text-3xl " >
            How does it work ?
        </div>
        <div class=" h-px bg-white w-20" ></div>
    </div>

    <!-- Logic explanation -->
    <div class=" font-semibold text-center text-xl" >
        <i class=" leading-10" >
            Basically, what SuperSecret does is encrypt your environment variables by using a combinaison of JWT and Hashing <br>
            When you will create your SuperSecret account, a random string will be generated as your secret hash. That string <br>
            is known to no one. The actual secrets object is first signed into a JWT and then hashed with your secret key. <br>
            All you will have to do to use your variables in a project is to run our <span class=" text-yellow-500" >CLI</span> before running your server. <br>
            Our goal is to make sure that the variables are visible by you and only you. You can add collaborators to a project <br>
            but all it enables them to do is pull the secrets into their process. <br> You will be the only one with direct read and write access to your secrets
        </i>
    </div>

    <!-- How are we trying to solve -->
    <div class=" text-center flex justify-center space-x-4 items-center mt-20 text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-green-300" >
        <div class=" h-px bg-white w-20" ></div>
        <div class=" text-3xl" >
            What problems are we solving ?
        </div>
        <div class=" h-px bg-white w-20" ></div>
    </div>
    <div class=" text-2xl space-y-5 mt-5 " >
        <div class=" text-center" >
            ✅ Risk of exposing secrets while sharing through social media or emails
        </div>
        <div class=" text-center" >
            ✅ Risk of accidentally pushing .env files to source control
        </div>
        <div class=" text-center" >
            ✅ Missing creds from .env files
        </div>
    </div>

    <!-- Request access to the code -->
    <div id="dev" class=" lg:text-4xl text-center my-10 text-green-500" >
        {"</>"} It's OpenSource :) so you can see that we can't see your secrets {"</>"}
    </div>
    <div class=" flex flex-col w-2/5 m-auto space-y-5 " >
        <input bind:value={email} class=" p-2 focus:outline-none text-slate-600 rounded-md" placeholder="Your email" type="text">
        <input bind:value={githubHandle} class=" p-2 focus:outline-none text-slate-600 rounded-md" placeholder="Your GitHub handle" type="text">
        <button disabled={requestedDev} on:click={requestAccess} class=" text-xs lg:text-xl bg-green-500  lg:w-2/5 m-auto p-2 rounded-md hover:scale-110 ease-in duration-200" >
            { requestedDev?" We got you :) ": "Request access to the code"}
        </button>
    </div>

    <div id="started" class=" text-center mt-20 mb-5 text-4xl  text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 transition-all hover:bg-gradient-to-l hover:scale-105 hover:cursor-pointer" >
        Try the beta RIGHT NOW
    </div>
    <div class=" flex flex-col w-2/5 m-auto space-y-5 " >
        <button on:click={()=>{ window.location.href="/auth" }} class=" bg-green-500  lg:w-2/5 m-auto p-2 rounded-md hover:scale-110 ease-in duration-200" >
            Get started
        </button>
    </div>

    <div class=" text-center lg:text-3xl my-20" >
		<p class=" text-xl" >
			Developped and maintained by <a target="_blank"  class=" underline text-blue-500" href="htps://github.com/TheWisePigeon">TheWisePigeon</a> and <a target="_blank" class=" underline text-blue-500" href="https://github.com/drect911">dRect911</a>
		</p>
    </div>

</div>
