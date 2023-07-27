let buttonCallPopUp = document.querySelector('.pop-up')
let popUpText = document.querySelector('.pop-up-text')
let popUpStatus = false

buttonCallPopUp.addEventListener('click', ()=>{
    if(popUpStatus === false){
        popUpText.classList.add('show')
        popUpStatus = true
    }
    else if(popUpStatus){
        popUpText.classList.add('hide')
        popUpText.classList.remove('show')
        popUpStatus = false
        setTimeout(() => {
            popUpText.classList.remove('hide')
        }, 800);
    }
})