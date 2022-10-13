const validationForm = document.querySelector('#validationForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const repeatPassword = document.querySelector('#repeatPassword');
const checkbox = document.querySelector('#terms');
const p = document.querySelector('#errorMessage');
const regName = /^[A-Za-z\s]+$/;
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



const setError = () => {
    p.classList.remove('d-none');
    return false;
}

const setSucess = () =>{
    p.classList.add('d-none');
    console.log('Rätt!')
    return true;
}


const validateText = () => {


if(firstName.value.trim() === '' || firstName.value.length < 2 || !regName.test(firstName.value.trim())){

    setError();
    console.log('Något gick fel, firstName fältet måste vara ifyllt korrekt');
}
else{
    setSucess();
}

if(lastName.value.trim() === '' || lastName.value.length < 2 || !regName.test(lastName.value.trim())){
    setError();
    console.log('Något gick fel, lastName fältet måste vara ifyllt korrekt');
}
else{
    setSucess();
}

if(!regEmail.test(email.value.trim())){
    setError();
    console.log('Något gick fel, email fältet måste vara ifyllt korrekt');
}
else{
    setSucess();
}

if(password.value.trim() === '' || password.value.length < 6 || password.value.trim() !== repeatPassword.value.trim()){
    setError();
    console.log('Något gick fel, password måste vara ifyllt korrekt');
}
else{
    setSucess();
}
if(repeatPassword.value.trim() === '' || repeatPassword.value.length < 6){
    setError();
    console.log('Något gick fel, repeatPassword måste vara ifyllt korrekt');
}
else{
    setSucess();
}

if(!checkbox.checked) {
    setError();
    console.log('Något har gått fel, kryssa i checkrutan')

}
else {
    setSucess();
    
}
if(checkbox.checked  && repeatPassword.value.length > 6 && password.value.length > 6 && password.value.trim() === repeatPassword.value.trim() && regEmail.test(email.value.trim()) && lastName.value.length > 2 && regName.test(lastName.value.trim()) && firstName.value.length > 2 && regName.test(firstName.value.trim())){
    console.log('ALLT STÄMMER')
const user = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value
};
console.log(user);
}

}


validationForm.addEventListener('submit', e => {
    e.preventDefault();
    
    validateText()

    });
