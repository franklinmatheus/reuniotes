<script>
	import '../app.css'
	import Header from '$lib/Header.svelte'
	import Note from '$lib/Note.svelte'
</script>
  
<article>
	<div class="container"> 
	  <Header />
  
	  	<section>
			<Note state='writing'></Note>
	  	</section>
	</div>
</article>
  