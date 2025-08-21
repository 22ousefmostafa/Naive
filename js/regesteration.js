const wrap = document.querySelector('.wrap'); 
const RegisterLink = document.querySelector('.reg-link'); 
const LoginLink = document.querySelector('.login-link'); 

RegisterLink.onclick = () =>{
    wrap.classList.add('active'); 
}

LoginLink.onclick = () =>{
    wrap.classList.remove('active'); 
}
