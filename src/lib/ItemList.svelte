<script>
  import '../app.css'
  import { dateFormated } from '$lib/scripts/date'
  import Button from '$lib/Button.svelte'
  import { goto } from '$app/navigation'
  
  export let id
  export let note
  
  function selected() {
    goto(`/edit/${id}`)
  }
</script>

<div class="item">
  <div>{note.title}</div>
  <div>
    {dateFormated(note.date)}
    <Button size="small" 
      label="Abrir" 
      on:click={selected} />
  </div>
</div>