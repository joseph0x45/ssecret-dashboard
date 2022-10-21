<script lang="ts" >
    const api_url = "https://web-production-9c04.up.railway.app/project/create"
    const fetch_url_endpoint = "https://web-production-9c04.up.railway.app/project/fetch"
    import axios from "axios"
    import ProjectBox from "../../components/ProjectBox.svelte"
    
    
    //NOTE State management
    import { projects } from "../../stores/stores"
    let projectsArray : IUserProject[]
    projects.subscribe((value)=>{
        projectsArray = value
    })

    $: projectNameState = projectName    
    
    //NOTE Function to fetch user's projects asynchronously
    async function fetchUserProjects(){
        const response = await axios.get(
            fetch_url_endpoint,
            {
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`
                }
            }
        )
        .then((res)=>{
            const { data } = res.data
            projects.set([...data])
            return data
        })
        .catch((err)=>{
            return false
        })
        return response
    }

    //NOTE Call the function to fetch the projects
    let usersProjects = fetchUserProjects()

    //NOTE This function will be called when the user wants to refresh the projects list
    function fetchProjects(){
        usersProjects = fetchUserProjects()
    }

    //NOTE Utilities
    let showForm = false;
    let projectName : string = ""
    function toggleShow(){
        showForm = !showForm;
    }

    //NOTE Function to create a project
    async function createProject(){
        for ( let project in projectsArray ){
            if(projectsArray[project].name==projectName){
                alert("A project with the same name already exists")
                return
            }
        } 
        await axios.post(
            api_url,
            {
                name: projectName,
                USK: localStorage.getItem("USK")
            },
            {
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`
                }
            }
        )
        .then( async (res)=>{
            const {  data } = res.data
            projects.update((projects)=>[...projects, { owner: data.owner, collaborators: data.collaborators, _id: data._id, secrets: data.secrets, name: data.name }])
            toggleShow()
            projectName=""
        })
        .catch((errResponse)=>{
            const { status, data } = errResponse.response
            alert(data.message)
        })
    }
    interface IUserProject{
        owner: string
        collaborators: []
        _id: string
        secrets: string
        name: string
    }
</script>


    <!-- nav bar -->
    <!-- <nav class="z-50 sticky top-0 w-full h-24 sm:h-32 px-4 flex justify-between items-center border-b border-slate-300 dark:border-slate-700 bg-slate-200  dark:bg-slate-900" >
        <h2 class="font-bold poppins text-3xl sm:text-4xl xl:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 transition-all ">SuperSecret</h2>
        <h2 class="text-slate-800 dark:text-slate-300 font-medium rounded-full p-1 px-2 bg-slate-300 dark:bg-slate-800 text-[12px] sm:text-[14px] md:text-[16px] transition-all" >{userEmail}</h2>
    </nav> -->

    <!-- main content -->
<div class="w-full h-full z-0 bg-slate-100 dark:bg-slate-800 p-4 overflow-y-auto pb-36" >
    <!-- top bar -->
    <div class="w-full flex pb-4 border-b border-slate-400 dark:border-slate-600 items-center ">
        <h1 class="text-3xl font-bold text-slate-700 dark:text-slate-300" >My projects</h1>
        <button on:click={toggleShow} class="ml-6 p-1 px-4 rounded-full bg-blue-100 dark:bg-slate-700 text-blue-400 dark:text-slate-400 hover:bg-blue-200 dark:hover:bg-slate-600 hover:text-blue-500 dark:hover:text-blue-300 transition-all" >New+</button>
    </div>

        <!-- projects container -->
        <div class="flex flex-wrap mt-4 p-4 transition-all  " >
            <!-- single project div -->
            {#await usersProjects}
                <!-- loader box -->
                <div class="grow sm:grow-0 order-first sm:order-none w-60 h-48 rounded-xl border-2 p-4 m-2 border-slate-400 bg-slate-200 dark:border-slate-700 dark:bg-slate-800 flex flex-col items-center justify-center transition-all animate-pulse " >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 animate-spin text-slate-700 dark:text-slate-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </div>
            {:then result}
                {#if $projects.length!=0}
                    {#each $projects as project}
                        <ProjectBox name={project.name} id={project._id} projectName={projectNameState} />                
                    {/each}
                {:else}
                    <!-- error box  -->
                    <div class="grow sm:grow-0 order-first sm:order-none w-60 h-48 rounded-xl border-2 p-4 m-2 border-slate-400 bg-slate-200 flex flex-col items-center justify-center transition-all" >
                        <span class="material-icons-round text-slate-600 text-6xl" >warning_amber</span>
                        <span class="text-slate-400" >Couldn't load projects, try to refresh</span>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <span on:click={fetchProjects} class="material-icons-round text-slate-600 rounded-full p-2 bg-slate-300 hover:text-slate-700 hover:cursor-pointer hover:rotate-45 transition-all " >refresh</span>
                    </div>
                {/if}
            {/await}    

            <!-- project create box -->
            <div  class={`${ showForm ? 'grow sm:grow-0 order-first sm:order-none w-60 h-48 rounded-xl border-2 p-4 m-2 border-slate-400 dark:border-slate-600 bg-slate-200 bg-slate-700 flex flex-col justify-center transition-all ' : 'hidden' }`} >
                <input bind:value={projectName}  type="text" placeholder="New project name" class="rounded-lg px-2 w-full h-8 text-[15px] bg-slate-100 dark:bg-slate-600 focus:outline-none focus:border focus:border-slate-300 dark:focus:border-slate-500 dark:caret-slate-300 dark:text-slate-300" />
                <button on:click={createProject}  class="rounded-full text-slate-500 hover:text-slate-600 mx-2 mt-4 p-1 px-2 bg-slate-300 hover:border hover:border-slate-400 dark:hover:text-slate-400 dark:bg-slate-600 dark:hover:border-slate-500 transition-all ">Create</button>
                <button on:click={toggleShow} class="rounded-full text-slate-500 hover:text-slate-600 mx-2 mt-4 p-1 px-2 bg-slate-300 hover:border hover:border-slate-400 dark:hover:text-slate-400 dark:bg-slate-600 dark:hover:border-slate-500 transition-all ">Cancel</button>
            </div>

            <!-- new project box -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={toggleShow} class={`${ showForm ? 'hidden' : 'group grow sm:grow-0 order-first sm:order-none w-60 h-48 rounded-xl border-2 border-dashed hover:border-solid p-4 m-2 border-slate-400 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 dark:hover:border-slate-600 flex items-center justify-center hover:drop-shadow-md dark:hover:drop-shadow-none dark:hover:shadow-slate-500/50 hover:cursor-pointer transition-all' }`} >
                <span class="bg-slate-300 dark:bg-slate-700 dark:group-hover:bg-slate-600 text-slate-400 dark:text-slate-500 group-hover:text-slate-500 dark:group-hover:text-slate-400 text-xl rounded-full px-4" >New</span>
            </div>

    </div>

</div>


