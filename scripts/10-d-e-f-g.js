function clickButton(selector){
    const buttonElement=document.querySelector(selector);

    if(!buttonElement.classList.contains('is-toggled')){
        offPreviousButton();
        buttonElement.classList.add('is-toggled');
    }
    else{
        buttonElement.classList.remove('is-toggled');  
    }
}

function offPreviousButton(){
    const previousButton=document.querySelector('.is-toggled');
    if(previousButton){
        previousButton.classList.remove('is-toggled');
    }
}