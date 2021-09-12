<script context="module">
  	export async function load ({ page, fetch }) {
		const id = page.params.slug
		const response = await fetch(`/notes/${id}.json`)
		
		if (response.ok) {
			const data = await response.json()
			return {
				props: { note: data }
			}
		} else {
			return {
				status: response.status,
				error: new Error('Url not found')
			}
		}
	}
</script>

<script>
	import '../../app.css'
	import Header from '$lib/Header.svelte'
	import Note from '$lib/Note.svelte'

	export let note
</script>
  
<article>
	<div class="container"> 
	  <Header />
  
	  <section> 
        <Note state='writing' bind:id={note._id} 
			bind:title={note.title} 
			bind:content={note.content}>
		</Note>
	  </section>
	</div>
</article>
  