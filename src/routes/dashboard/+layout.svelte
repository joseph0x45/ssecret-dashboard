<script lang="ts" >
    import Header from "../../components/Header.svelte"
    import Footer from "../../components/Footer.svelte"
</script>


<div class=" fixed w-full h-full " >
    <Header />

    <slot/>
    <Footer />
</div>

