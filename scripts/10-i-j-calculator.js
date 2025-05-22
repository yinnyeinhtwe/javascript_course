let calculation = localStorage.getItem('calculation')||'';

displayCalculation();

function updateCalculation(value){
    calculation+=value;
    displayCalculation();
    console.log(calculation);
    localStorage.setItem('calculation',calculation);
}

function displayCalculation(){
    document.querySelector('.js-calculation').innerHTML=`${calculation}`;
}