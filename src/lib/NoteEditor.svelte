<script>
  import '../app.css'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'

  import Button from './Button.svelte'
  
  export let id
  export let title = ''
  export let content = ''
  export let date = new Date()

  let length = (content == undefined) ? 0 : content.length 
  let errors = {}

  export let edited

  function validateTitle() {
    userTyped()

    if (title.length == 0) {
      errors['title'] = "Campo obrigatório"
      return false
    } else if (title.length < 5) {
      errors['title'] = "Mínimo de 5 caracteres"
      return false
    } else {
      delete errors['title']
      return true
    }
  }

  function validateContent() {
    count()

    if (content.length == 0) {
      errors['content'] = "Campo obrigatório"
      return false
    } else if (content.length < 10) {
      errors['content'] = "Mínimo de 10 caracteres"
      return false
    } else {
      delete errors['content']
      return true
    }
  }

  function count() {
    length = content.length
    userTyped()
  }

  function userTyped() {
    edited = true
  }

  async function remove() {
    var ok = confirm("Deseja realmente remover a anotação?")

    if(ok) {
      const response = await fetch(`/notes/${id}.json`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        }
      })

      goto("/notes")
    }
  }

  async function update() {
    const response = await fetch(`/notes/${id}.json`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        "title": title,
        "content": content,
        "date": date
      })
    })

    goto("/notes")
  }

  async function onSubmit() {
    const response = await fetch('notes.json', {
      method: 'POST',
      headers: {
			  'content-type': 'application/json'
		  },
      body: JSON.stringify({
        "title": title,
        "content": content,
        "date": date
      })
    })

    goto("/notes")
  }
</script>

<form on:submit|preventDefault={onSubmit} method="POST">
  <div class="container-title">
    <input 
      class="input-title"
      name="title" 
      bind:value={title} 
      placeholder="Título" 
      maxlength="50" 
      on:input={validateTitle}
      on:click={validateTitle}
    />
    <span class="error">{#if errors['title']}{errors['title']}{/if}</span>
  </div>
  <div class="container-editor">
    <textarea type="text" 
      name="content"
      rows="25" 
      bind:value={content} 
      on:input={validateContent}
      on:click={validateContent}
      placeholder="Escreva sua anotação com Markdown"
    />
    <span class="chars">{length} caracteres</span>
    <span class="error">{#if errors['content']}{errors['content']}{/if}</span>
  </div>
  {#if $page.path === '/add'}
    {#if errors['title'] || errors['content'] || !edited || title.length==0 || content.length==0}
      <Button label="Adicionar" disabled />
    {:else}
      <Button primary type="submit" label="Adicionar" />
    {/if}
  {/if}

  {#if $page.path.includes('/edit')}
    {#if edited}
      <Button primary type="submit" label="Atualizar" on:click={update} />
    {:else}
      <Button type="submit" label="Nenhuma mudança" disabled />
    {/if}
  <Button danger label="Remover" on:click={remove}/>
  {/if}
</form>