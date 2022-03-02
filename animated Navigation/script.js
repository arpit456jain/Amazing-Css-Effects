const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', function ()  {
    nav.classList.toggle('active')
})