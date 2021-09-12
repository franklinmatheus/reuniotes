<script>
  import '../app.css'
  import { createEventDispatcher } from 'svelte'

  export let primary = false
  export let danger = false
  export let disabled = false
  export let type = "button"
  export let backgroundColor = ''
  export let size = 'medium'
  export let label = ''

  let mode = primary ? 'button--primary' : (danger ? 'button--danger' : 'button--secondary')
  let style = backgroundColor ? `background-color: ${backgroundColor}` : ''

  const dispatch = createEventDispatcher()

  function onClick(event) {
    dispatch('click', event)
  }
</script>

<button
  type={type}
  class={['button', `button--${size}`, mode].join(' ')}
  {style}
  on:click={onClick}
  disabled={disabled}>
  {label}
</button>
