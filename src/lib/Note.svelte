<script>
  import '../app.css'
  import Button from '$lib/Button.svelte'
  import NoteEditor from '$lib/NoteEditor.svelte'
  import NoteViewer from '$lib/NoteViewer.svelte'

  export let state
  export let id
  export let title
  export let content
  
  let edited = false

  function writing() { state = 'writing' }
  function viewing() { state = 'viewing' }
</script>

<div>
  {#if state === 'viewing'}
    <div class="btn-group">
      <Button size="small" label="Editar" on:click={writing} />
      <Button primary size="small" label="Preview" disabled />
    </div>
    <NoteViewer bind:content={content} bind:title={title}></NoteViewer>
  {:else if state === 'writing'}
    <div class="btn-group">
      <Button primary size="small" label="Editar" disabled />
      <Button size="small" label="Preview" on:click={viewing} />
    </div>
    <NoteEditor bind:content={content} bind:title={title} bind:id={id} bind:edited={edited}></NoteEditor>
  {/if}
</div>
  