<script lang="ts">
	//export let secret: secretObject;

	let show = false;
	function toggleShow() {
		show = !show;
	}

	interface secretObject {
		key: string;
		value: string;
	}
</script>

