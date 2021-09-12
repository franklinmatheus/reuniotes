<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/notes.json')

		if (res.ok) {
			const notes = await res.json()
			const sortedNotes = notes.sort((a, b) => b.date > a.date ? 1: -1)
			return {
				props: { notes : sortedNotes }
			}
		}
	}
</script>

<script>
	import '../../app.css'
	import Header from '$lib/Header.svelte'
	import NoteList from '$lib/NoteList.svelte'
	
	export let notes = []

	let mocks = [
	  {
		title: 'Reunião sobre mestrado',
		date: Date.now(),
		content: `
		# This is a header

		This is a paragraph.

		* This is a list
		* With two items
		1. And a sublist
		2. That is ordered
			* With another
			* Sublist inside

		| And this is | A table |
		|-------------|---------|
		| With two    | columns |`
	  },
	  {
		title: 'Primeira reunião',
		date: Date.now(),
		content: `# title`
	  }
	]
</script>
  
<article>
	<div class="container"> 
	  <Header />
  
		<section>
			{#if notes.length === 0}
				<div class="inform"><h3>Você não possui anotações 😔</h3></div>
			{:else}
				<NoteList bind:notes={notes}></NoteList>
			{/if}
		</section>
	</div>
</article>
  