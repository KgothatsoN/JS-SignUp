let form = document.getElementById('form');
let fname = document.getElementById('fname');
let surname = document.getElementById('surname');
let password = document.getElementById('password');
let passwordConfirm = document.getElementById('passwordConfirm');
let email = document.getElementById('email')

form.addEventListener('submit', (e) =>{

    if(fname.value ==="")   {
        e.preventDefault();
        alert("Error: Name field can not be empty!");
    }
    if(surname.value ==="")   {
        e.preventDefault();
        alert("Error: Surname field can not be empty!");
    }
    if(password.value ==="" || passwordConfirm.value ==="")   {
        e.preventDefault();
        alert("Error: Password field can not be empty!");
    }
    if(email.value ==="")   {
        e.preventDefault();
        alert("Error: Email box can not be empty!");
    }
    
    

});


