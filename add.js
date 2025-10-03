let modal = document.querySelector('.modal')
let x = document.querySelector('.x')
let div = document.querySelector('.div')
let hid = document.querySelector('.hidden')
let over = document.querySelector('.overlay')


modal.addEventListener('click', ()=>{
    div.classList.remove('hidden')
    over.classList.remove('hidden')
})

x.addEventListener('click', ()=>{
    div.classList.add('hidden')
    over.classList.add('hidden')
})

document.addEventListener('keydown', (r)=>{
    r.key = 'Escape'
    div.classList.remove('hidden')
    over.classList.remove('hidden')
})

document.addEventListener('keyup', (a)=>{
    a.key = 'Escape'
    div.classList.add('hidden')
    over.classList.add('hidden')
})