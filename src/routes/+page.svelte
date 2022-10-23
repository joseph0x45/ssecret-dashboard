<script lang="ts">
    // Can also be included with a regular script tag

  


</script>

<body class="z-10 bg-slate-100 " >

    <!-- blur nav -->
    <nav class="h-24 w-full z-50 sticky top-0 shadow-md backdrop-blur-lg bg-white lg:bg-white/50 border-b border-slate-400 flex justify-around items-center transition-all " >
        <h2 class="font-bold poppins text-3xl sm:text-4xl xl:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-800 via-purple-800 to-pink-800 transition-all block ">SuperSecret</h2>
        
        <!-- right nav -->
        <div class="text-sm lg:text-xl sm:text-normal bg-slate-200/25 hover:bg-slate-300/50 text-slate-900 border border-slate-400/50 rounded-xl p-2 px-4 transition-all" >
            <a href="/" class="focus:outline-none " >Developers </a> 
            <!-- <a href="#">Get Started</a> -->
        </div>
    </nav>

    <!-- hero section -->
    <div class="hero relative grid grid-cols-3 pb-0 lg:pb-32 bg-slate-100" >
        <div class="col-span-3 lg:col-span-2 p-8 lg:pl-24 xl:pl-32" >
            <h1 class=" text-slate-700 text-4xl md:text-6xl xl:text-[80px] font-bold " >
                Break free from the burden of managing .env files
            </h1>
            <div class="pt-4">
                <span class="text-slate-600 text-sm xl:text-xl" >SuperSecret helps you manage and share your environment variables,</span>
                <span class="text-sky-600 font-bold text-sm xl:text-xl" >Easily and Securely.</span> 
            </div>
            
        </div>
        <div class="col-span-3 pt-8 pb-32 md:py-0  lg:col-span-1 flex justify-center items-center" >
            <button class=" text-xl font-bold p-3 rounded-xl shadow-md hover:scale-105 hover:-translate-y-1 transition-all shadow-sky-400/50 bg-sky-600 text-white hover:bg-white hover:text-sky-600  "  >
                Get Started
            </button>
        </div>

        <!-- svg divider waves styles -->
        <div class="custom-shape-divider-bottom-1666461230">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            </svg>
        </div>
        <!-- svg divider triangle style -->
        <!-- <div class="custom-shape-divider-bottom-1666460611">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
            </svg>
        </div> -->

    </div>

    <!-- how does it work section  -->
    <div class="pb-0 lg:pb-24 bg-slate-800" >
        <div class=" p-8 " >
            <h1 class=" text-slate-100  text-4xl md:text-6xl xl:text-[80px] font-bold text-end my-8 mr-8" >
                How does it work?
            </h1>
            <p class=" text-slate-300  md:text-xl lg:text-2xl text-start w-full p-4 md:px-8 lg:px-16 xl:px-32 lg:w-3/5" >
                
                Basically, what SuperSecret does is encrypt your environment variables by using a combinaison of JWT and Hashing 
                When you will create your SuperSecret account, a random string will be generated as your secret hash. That string 
                is known to no one. The actual secrets object is first signed into a JWT and then hashed with your secret key. 
                All you will have to do to use your variables in a project is to run our  <a href="/" class="text-sky-600 font-bold underline hover:no-underline" >CLI</a>  before running your server. 
                Our goal is to make sure that the variables are visible by you and only you. You can add collaborators to a project 
                but all it enables them to do is pull the secrets into their process.  You will be the only one with direct read and write access to your secrets

            </p>
            
        </div>
        <!-- <div class="col-span-3 lg:col-span-1 flex justify-center items-center" >
            <button class=" text-xl font-bold p-3 rounded-xl shadow-md hover:scale-105 hover:-translate-y-1 transition-all shadow-sky-400/50 bg-sky-600 text-white hover:bg-white hover:text-sky-600  "  >
                Get Started
            </button>
    
        </div> -->
    </div>

    <!-- problem solving section -->
    <div class="grid grid-cols-12 pb-0 bg-slate-100 bg-cover border-b border-slate-800"  >
        <!-- style="background-image: url('./img/layered-waves-haikei.svg')" -->
        <div class=" px-6 xl:px-12  col-span-12 lg:col-span-8 flex justify-center items-center border-b lg:border-r border-slate-800 " style="background-image: url('./img/blurry-gradient-haikei-light.svg')" >
            <h1 class=" py-24 lg:py-0 text-6xl md:text-[80px] xl:text-[120px] font-bold mb-8 text-slate-700 " >
                <!-- bg-gradient-to-tl text-transparent bg-clip-text from-sky-500 via-purple-500 to-pink-500 -->
                What problem are we solving?
            </h1>
        </div>
        <!-- problems container -->
        <div class="group col-span-12 lg:col-span-4 flex-col flex justify-center items-center content-center xl:flex-wrap text-xl text-start p-16 transition-all bg-gradient-to-bl hover:bg-gradient-to-b from-sky-200 via-purple-200 to-pink-200 text-slate-300" >
            <!-- style="background-image: url('./img/blurry-gradient-haikei.svg')" -->

            <!-- problem box -->
            <div class="rounded-xl p-6 m-4 mb-16 w-64 xl:w-96 rotate-3 group-hover:-rotate-3 group-hover:scale-105 transition-all shadow-xl  shadow-sky-300 border-sky-600 flex flex-col items-center justify-between border  text-sky-900 bg-slate-200" >
                <h3 class="text-2xl text-center font-bold  " >
                    Risk of exposing secrets while sharing through social media or emails
                </h3>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-16 w-16 mt-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    stroke-width="2"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            </div>

            <!-- problem box -->
            <div class="rounded-xl p-6 m-4 mb-16 w-64 xl:w-96 -rotate-3 group-hover:rotate-3 group-hover:scale-105 transition-all shadow-xl shadow-purple-300 border-purple-600 flex flex-col items-center justify-between border  text-purple-900 bg-slate-200" >
                <h3 class="text-2xl text-center font-bold " >
                    Risk of accidentally pushing .env files to source control
                </h3>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-16 w-16  mt-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    stroke-width="2"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            </div>

            <!-- problem box -->
            <div class="rounded-xl p-6 m-4 mb-16 w-64 xl:w-96 rotate-3 group-hover:-rotate-3 group-hover:scale-105 transition-all shadow-xl shadow-pink-300 border-pink-600 flex flex-col items-center justify-between border text-pink-900 bg-slate-200" >
                <h3 class="text-2xl text-center font-bold " >
                    Missing creds from .env 
                </h3>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-16 w-16  mt-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    stroke-width="2"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            </div>
        </div>
    </div>

    <!-- Request access to the code section -->
    <div class="w-full grid grid-cols-12 pt-24 pb-48 bg-slate-100 bg-cover border-b border-slate-800" style="background-image: url('./img/stacked-waves-haikei-dark-slate.svg')" >

        <!-- style="background-image: url('./img/layered-waves-haikei.svg')" -->

        <div class="col-span-12 sm:col-span-4" >
            <h1 class=" text-center text-5xl md:text-6xl xl:text-[50px] xl:px-8 font-bold text-slate-100 transition-all " >
                <!-- bg-gradient-to-tl text-transparent bg-clip-text from-sky-500 via-purple-500 to-pink-500 -->
                Try the beta RIGHT NOW
            </h1>

            <div class="flex flex-col m-auto justify-center items-center p-4 w-1/2" >
                <button class="w-3/4 h-16 m-4 font-bold text-xl rounded-xl bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-white/75  border-2 border-white hover:scale-110 transition-all" >
                    Get started
                </button>
            </div>
        </div>


        <div class="col-span-12 sm:col-span-8" >
            <h1 class=" text-center text-3xl xl:text-[50px] px-8 xl:px-32 font-bold mb-8 text-slate-300 " >
                <!-- bg-gradient-to-tl text-transparent bg-clip-text from-sky-500 via-purple-500 to-pink-500 -->
                It's OpenSource :) so you can see that we can't see your secrets
            </h1>
    
            <div class="flex flex-col m-auto justify-center items-center p-4 w-4/5 lg:w-1/2" >
                <input type="text" placeholder="Your email" class="w-full h-10 lg:h-12 m-2 pl-2 p-1 rounded-lg text-lg focus:outline-none bg-slate-200 border-2 border-slate-400 hover:border-slate-600 focus:border-slate-600  text-slate-800 caret-slate-800" >
                <input type="text" placeholder="Your Github handle" class="w-full h-10 lg:h-12 m-2 pl-2 p-1 rounded-lg text-lg focus:outline-none bg-slate-200 border-2 border-slate-400 hover:border-slate-600 focus:border-slate-600  text-slate-800 caret-slate-800" >
                <button class="w-2/3 h-12 m-4 font-bold text-sm lg:text-xl rounded-xl bg-slate-400 text-slate-700 shadow-lg shadow-slate-600/75 border-2 border-slate-600 hover:bg-slate-300 hover:scale-105 transition-all" >
                    Request access to the code
                    <svg 
                        role="img" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                    <title>
                        GitHub
                    </title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </button>
            </div>
        </div>

    </div>


    <div class="w-full bg-slate-200 h-16 px-4 text-center text-sm md:text-lg" >
        <p class="py-4" >
            Developped and maintained by 
            <a href="/" class="text-sky-700 hover:text-sky-600 font-bold underline hover:no-underline" >TheWisePigeon</a>
            and 
            <a href="/" class="text-sky-700 hover:text-sky-600 font-bold underline hover:no-underline" >dRect911</a>
        </p>

    </div>

    
     
    
    


</body>