<script>
  import '../app.css'
  import ItemList from '$lib/ItemList.svelte'
  
  export let notes
</script>

<div>
  {#each notes as note, index (note)}
    <ItemList note={note} 
      id={note._id} />
  {/each}
</div>