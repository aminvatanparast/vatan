


const nextSlide = () => {
    let seen = document.querySelector('.seen')
    let slide= document.querySelectorAll('.slide')
    if (seen.nextElementSibling) {
        seen.nextElementSibling.classList.add('seen')
    }
    if(!seen.nextElementSibling){
        slide[0].classList.add('seen')
    }
    seen.classList.remove('seen')

}

setInterval(()=>{
    nextSlide()
},1000)


































