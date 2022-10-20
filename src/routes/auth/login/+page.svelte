<script lang="ts">
	import axios from 'axios';

	let email = '';
	let password = '';

	let loading = false;
	let error = [false, ''];
	
	async function login() {
		if (email == '' || password == '') {
			error = [true, 'Both fields are required'];
			return;
		}
        const params = {
		email,
		password
	};
		const loginResponse = await axios
			.post('http://localhost:3000/auth/login', params)
			.then((res) => res)
			.catch((err) => err.response);
        console.log(loginResponse);
		if (loginResponse.status == 200) {
            localStorage.removeItem("ssecretId")
			localStorage.setItem('ssecretId', loginResponse.data.authToken);
			window.location.href = '/';
		}
		if (loginResponse.status == 404) {
			error = [true, loginResponse.data.message];
			return;
		}
        if (loginResponse.status == 400) {
			error = [true, loginResponse.data.message];
			return;
		}
	}
</script>

