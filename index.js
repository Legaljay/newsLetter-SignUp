 /*
    
    1) if input was filled incorrectly DO
    a) change input border color to tomato red and placeholder
    b) fill the innerText of the span with Valid email required

    2) if input was filled correctly DO
    3) on button click pop up success message
    
*/

/*document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector(".card");
    const textSuccess = document.querySelector('#text-success');
    const button = document.querySelector('.btn');
    const input = document.querySelector('[type=email]');
    const dismiss = document.querySelector('.submit');
    const error = document.querySelector('.error');

    let active = false;

    function showErrorMessages(message) {
        error.textContent = message;
    }

    function clearErrorMessages() {
        error.textContent = '';
    }

    function toggleCardState(valid) {
        card.classList.toggle('active', valid);
        textSuccess.classList.toggle('active', !valid);
        textSuccess.classList.toggle('text-success', valid);
        changeBorderColor(valid);
        changeTextColor(valid);
        if (!valid) {
            showErrorMessages('Valid email required');
        } else {
            clearErrorMessages();
        }
    }

    function changeBorderColor(valid) {
        input.style.borderColor = valid ? 'initial' : 'red';
    }

    function changeTextColor(valid) {
        error.style.color = valid ? 'initial' : 'red';
    }

    input.addEventListener('input', (e) => {
        let email = e.target.value;
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        active = pattern.test(email);
        toggleCardState(active);
    });

    button.addEventListener('click', () => {
        toggleCardState(active);
    });

    dismiss.addEventListener('click', () => {
        toggleCardState(!active);
    });
});*/


document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector(".card");
    const textSuccess = document.querySelector('#text-success');
    const button = document.querySelector('.btn'); 
    const input = document.querySelector('[type=email]');
    const dismiss = document.querySelector('.submit'); 
    const output = document.querySelector('.output-mail');

    let active = false;

    function showErrorMessages(Message) {
        error.textContent = Message;
    }

    function clearErrorMessages() {
        error.textContent = '';
    }

    input.addEventListener('input', (e) => {
        let email = e.target.value;
        //const pattern = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', 'g');
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        active = pattern.test(email);
        if(active){

        output.textContent = email; 
        changeBorderColor(true);
        changeTextColor(true);
        clearErrorMessages();

        }else{
            changeBorderColor(false);
            changeTextColor(false);
            showErrorMessages('Valid email required')
        }
    });

    function changeBorderColor(valid) {
        input.style.borderColor = valid ? 'initial' : 'red';
    }

    const error = document.querySelector('.error');

    function changeTextColor(valid) {
        error.style.color = valid ? 'initial' : 'red';
    }

    button.addEventListener('click', () => {
        console.log(active);

        if (active){
        card.classList.add('active');
        textSuccess.classList.remove('active');
        textSuccess.classList.add('text-success');
        changeBorderColor(true);
        changeTextColor(true);
        clearErrorMessages()
        }else{
            card.classList.remove('active');
            textSuccess.classList.remove('text-success');
            textSuccess.classList.add('active');
            showErrorMessages('Valid email required')
            changeBorderColor(false);
            changeTextColor(false);
        }

    
    })

    dismiss.addEventListener('click', () => {
        if (active){
            
            card.classList.remove('active');
            textSuccess.classList.remove('text-success');
            textSuccess.classList.add('active');
        }
            //card.classList.add('active');
           // textSuccess.classList.remove('active');
           // textSuccess.classList.add('text-success');
    })

})

/*document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector(".card");
    const textSuccess = document.querySelector('#text-success');
    const button = document.querySelector('.btn');
    const input = document.querySelector('[type=email]');
    const error = document.querySelector('.error');

    let isInputValid = false; // Add a flag to track input validity

    function showErrorMessages(message) {
        error.textContent = message;
    }

    function clearErrorMessages() {
        error.textContent = '';
    }

    input.addEventListener('input', (e) => {
        let email = e.target.value;
        const pattern = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', 'g');
        isInputValid = pattern.test(email); // Update the input validity flag
        
        if (isInputValid) {
            changeBorderColor(true);
            changeTextColor(true);
            clearErrorMessages();
        } else {
            changeBorderColor(false);
            changeTextColor(false);
            showErrorMessages('Valid email required');
        }
    });

    function changeBorderColor(valid) {
        input.style.borderColor = valid ? 'initial' : 'red';
    }

    function changeTextColor(valid) {
        error.style.color = valid ? 'initial' : 'red';
    }

    button.addEventListener('click', () => {
        if (isInputValid) { // Only perform the action if input is valid
            card.classList.add('active');
            textSuccess.classList.remove('active');
            clearErrorMessages();
        } else {
            card.classList.remove('active');
            textSuccess.classList.remove('text-success');
            textSuccess.classList.add('active');
            showErrorMessages('Message'); // Replace 'Message' with your actual error message
        }
    });
});*/


//const textContainer = document.querySelector('.text-ctn');
    //const savage = document.querySelector('savage');
  //const image = document.querySelector('img');
   // const mobile = document.querySelector('#mobile');

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