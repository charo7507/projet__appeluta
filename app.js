
/*******INDEX */
const oppenToggle = document.querySelector('.menu--item')
const topww = document.querySelector('.top')



const modale = document.querySelector('.modale')
const openModale = document.querySelector('.home__btn')
const closeModale = document.querySelector('.icon__close')

const eyes = document.querySelector('.input-box i')

const eyes2 = document.querySelector('.eye')

const pwd = document.getElementById('input-doc')
const pwd2 = document.getElementById('input-doc2')




eyes.addEventListener('click', (e)=>{

    if(eyes.classList.contains("bi-eye-fill")){
        pwd.setAttribute('type', 'text')
        eyes.classList.replace("bi-eye-fill", "bi-eye-slash-fill")

    }else if(eyes.classList.contains("bi-eye-slash-fill")){
        pwd.setAttribute('type', 'password')
        eyes.classList.replace("bi-eye-slash-fill", "bi-eye-fill")
  
    }
})

eyes2.addEventListener('click', ()=>{

    if(eyes2.classList.contains("bi-eye-fill")){
        pwd2.setAttribute('type', 'text')
        eyes2.classList.replace("bi-eye-fill", "bi-eye-slash-fill")

    }else if(eyes2.classList.contains("bi-eye-slash-fill")){
        pwd2.setAttribute('type', 'password')
        eyes2.classList.replace("bi-eye-slash-fill", "bi-eye-fill")
  
    }
})

//<i class="bi bi-eye-slash-fill"></i>

//<i class="bi bi-eye-fill"></i>




oppenToggle.addEventListener('click', () =>{
    topww.classList.toggle('actice-top')
})

openModale.addEventListener('click', () =>{
    modale.classList.add('modale-show')
    
})
closeModale.addEventListener('click', () =>{
    modale.classList.remove('modale-show')

})


