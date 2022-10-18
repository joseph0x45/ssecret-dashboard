<script lang="ts" >
    import axios from "axios"
    const url = "https://maillogger.onrender.com/store"
    let email: string = ""
    let githubHandle: string = ""

    let requestedDev= false
    let joinedList= false

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

    async function joinWaitlist(){
        if(email==""){
            alert("Email can't be empty") 
            return
        }
        const params = {
            email
        }
        axios.post(
            url,
            params
        )
        joinedList= true
        email=""

    }


</script>

<div class=" flex flex-col  w-full text-white p-4">
	<!-- Header -->
	<div class="  text-xs lg:text-3xl flex justify-around w-full items-baseline mb-3">
		<div class="  font-extrabold ">ᕙSuperSecretᕗ</div>
		<div class="gap-3 flex justify-between ">
			<div >
                <a href="#dev">
                    Developers
                </a>
            </div>
			<div class=" font-extrabold">|</div>
			<div >
                <a href="#waitlist">
                    Join the waitlist
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
            <a href="#waitlist" >
                <button class="p-2 bg-green-500 rounded-md hover:scale-110 ease-in duration-200"> Join the waitlist </button>
            </a>
        </div>
	</div>
    <span class="h-20" ></span>
    <!-- How will it work -->
    <div class=" text-center flex justify-center space-x-4 items-center text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-green-300" >
        <div class=" h-px bg-white w-20" ></div>
        <div class=" text-3xl " >
            How will it work ?
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
    <div id="dev" class=" lg:text-4xl text-center my-20 text-green-500" >
        {"</>"} It's OpenSource :) so you can see that we can't see your secrets {"</>"}
    </div>
    <div class=" flex flex-col w-2/5 m-auto space-y-5 " >
        <p class=" text-center text-xs lg:text-xl" >Fill this form to have access to the code when the app is released</p>
        <input bind:value={email} class=" p-2 focus:outline-none text-slate-600 rounded-md" placeholder="Your email" type="text">
        <input bind:value={githubHandle} class=" p-2 focus:outline-none text-slate-600 rounded-md" placeholder="Your GitHub handle" type="text">
        <button disabled={requestedDev} on:click={requestAccess} class=" text-xs bg-green-500  lg:w-2/5 m-auto p-2 rounded-md hover:scale-110 ease-in duration-200" >
            { requestedDev?" We got you :) ": "Request access to the code"}
        </button>
    </div>

    <div id="waitlist" class=" text-center my-20 text-4xl  text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 transition-all hover:bg-gradient-to-l hover:scale-105 hover:cursor-pointer" >
        Join the waitlist
    </div>
    <div class=" flex flex-col w-2/5 m-auto space-y-5 " >
        <p class=" text-center text-xs lg:text-xl" >SuperSecret will be available the next week end. Join the waitlist to be notified when it goes live </p>
        <input bind:value={email} class=" p-2 focus:outline-none text-slate-600 rounded-md" placeholder="Your email" type="text">
        <button on:click={joinWaitlist} class=" bg-green-500  lg:w-2/5 m-auto p-2 rounded-md hover:scale-110 ease-in duration-200" >
            { joinedList?" Thanks :) ": "Join the waitlist"}
        </button>
    </div>

    <div class=" text-center text-4xl my-20" >
        ᕙSuperSecretᕗ
    </div>

</div>
