<script>
  import '../app.css';
  import SvelteMarkdown from 'svelte-markdown'

  export let title
  export let content 
</script>

<h3 class="title-viewer">{title || "Sem título"}</h3>
<div class="container-viewer">
  <div class="markdown-viewer">
    <SvelteMarkdown source={content} />
  </div>
</div>
