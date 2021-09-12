<script>
    import '../app.css'

    export let primary = false

    export let backgroundColor = ''
    export let size = 'medium'
    export let label = ''
    export let path = ''

    let mode = primary ? 'button--primary' : 'button--secondary'
    let style = backgroundColor ? `background-color: ${backgroundColor}` : ''
</script>

<a
    href={path}
    sveltekit:prefetch
    type="button"
    class={['button', `button--${size}`, mode].join(' ')}
    {style}>
    {label}
</a>
