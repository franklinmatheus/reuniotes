<script>
  import '../app.css'
  import Button from '$lib/Button.svelte'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'

  function home() { 
    goto("/notes")
  }
  function add() { 
    goto("/add")
  }
</script>

<header>
  <div class="wrapper">
    <div>
      <h1 class="title-header">Reuniotes</h1>
    </div>

    
    {#if $page.path === '/notes'}
      <div><h1 class="view-header">Suas anotações</h1></div>
    {/if}

    {#if $page.path === '/add'}
      <div><h1 class="view-header">Nova anotação</h1></div>
    {/if}

    {#if $page.path.includes('/edit')}
      <div><h1 class="view-header">Anotação</h1></div>
    {/if}

    <div>
      {#if $page.path === '/notes'}
        <Button primary size="small" label="Nova anotação" on:click={add} />
      {/if}

      {#if $page.path === '/add' | $page.path.includes('/edit')}
        <Button size="small" label="Todas anotações" on:click={home} />
      {/if}
    </div>
  </div>
</header>
