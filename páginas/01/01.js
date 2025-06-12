const panels = document.querySelectorAll('.abierta')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('cerrada')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('cerrada')
    })
}