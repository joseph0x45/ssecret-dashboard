<script lang="ts" >
    import { browser } from "$app/environment";
    import axios from "axios"
    import Header from "../components/Header.svelte"

    let userToken = ""
    if(browser){
        userToken = localStorage.getItem("ssecretId") as string
    }
    console.log(userToken);
    
    
</script>

<Header />
<div class=" bg-slate-600 h-full w-full" >
    
</div>