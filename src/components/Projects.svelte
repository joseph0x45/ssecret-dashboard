<script lang="ts" >
    
    export let projects: [any] 
</script>

<div>
    {#each projects  as project}
        <p>{project.name}</p>
        <p>{project.collaborators.length}</p>
    {/each}
</div>