<script lang="ts" >
import axios from "axios"

let email = ""
let password = ""
let loading = false
let error = [false, ""]


async function register() {
    if(email=="" || password==""){
        error = [true, "Both fields are required"]
        return
    }
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
