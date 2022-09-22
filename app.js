
/*******INDEX */
const oppenToggle = document.querySelector('.menu--item')
const topww = document.querySelector('.top')



const modale = document.querySelector('.modale')
const openModale = document.querySelector('.home__btn')
const closeModale = document.querySelector('.icon__close')

oppenToggle.addEventListener('click', () =>{
    topww.classList.toggle('actice-top')
})

openModale.addEventListener('click', () =>{
    modale.classList.add('modale-show')
    
})
closeModale.addEventListener('click', () =>{
    modale.classList.remove('modale-show')

})


