
    const textContainer = document.querySelector('.text-ctn');
    const card = document.querySelector(".card");
    const textSuccess = document.querySelector('#text-success');
    const savage = document.querySelector('savage');
    const button = document.querySelector('[type=button]'); 
    const image = document.querySelector('img');
    const mobile = document.querySelector('#mobile');
    

//let widthMatch = window.matchMedia('(max-width: 540px)');

/*widthMatch.addEventListener('change', (mm)=> {
    if (window.innerWidth <= '768' && !active) return;
    if(mm.matches){
        image.classList.add('active');
        mobile.classList.remove('active');
    }
    else{
        image.classList.remove('active');
        mobile.classList.add("active")
    }
})*/

let active = true;
let valid = true;

function changeBorderColor(valid) {
    const input = document.querySelector('[type=email]');
    input.style.borderColor = valid ? 'grey' : 'red';
}
input.addEventListener('input', () => {
    changeBorderColor(true);
    changeTextColor(true);
});

function changeTextColor(valid) {
    const error = document.querySelector('error');
    error.style.color = valid ? 'var(--smokey-grey)' : 'red';
}

button.addEventListener('click', () => {
    console.log('Ayo');
    if (valid)
    /*
    
    1) if input was filled incorrectly DO
    a) change input border color to tomato red and placeholder
    b) fill the innerText of the span with Valid email required

    2) if input was filled correctly DO
    3) on button click pop up success message
    
    */
    if (active){
    card.classList.add('active')
    textSuccess.classList.remove('active')
    textSuccess.classList.add('text-success')
    }else{}

   
})