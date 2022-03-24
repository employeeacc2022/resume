// Проверка введенных данных
function verifyForm(){
    

    if (document.forms[0].login.value.length < 6) {

        temp = document.querySelector('.errorLoginClass');
        temp.classList.add('active');
        document.registrationForm.login.focus();
        return false

    }
    else{

        temp = document.querySelector('.errorLoginClass');

        if (temp.classList.contains('active')) {

            temp.classList.remove('active');

        }

    }


    const patternPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;   // ?=.* и $ и . - уточнить

    if (document.forms[0].password.value.match(patternPassword) == null) {

        temp = document.querySelector('.errorPasswordClass');
        temp.classList.add('active');
        document.registrationForm.password.focus();
        return false

    }
    else{

        temp = document.querySelector('.errorPasswordClass');

        if (temp.classList.contains('active')) {

            temp.classList.remove('active');

        }

    }


    if (document.forms[0].confirmPassword.value != document.forms[0].password.value) {

        temp = document.querySelector('.errorConfirmPasswordClass');
        temp.classList.add('active');
        document.registrationForm.confirmPassword.focus();
        return false

    }
    else{

        temp = document.querySelector('.errorConfirmPasswordClass');

        if (temp.classList.contains('active')) {

            temp.classList.remove('active');

        }

    }


    const patternEmail = /^(?=.*[@])(?=.*[.])/;   // Доработать

    if (document.forms[0].email.value.match(patternEmail) == null) {

        temp = document.querySelector('.errorEmailClass');
        temp.classList.add('active');
        document.registrationForm.email.focus();
        return false

    }
    else{

        temp = document.querySelector('.errorEmailClass');

        if (temp.classList.contains('active')) {

            temp.classList.remove('active');

        }

    }


    const patternName = /[^a-zA-Z ]/;

    if (document.forms[0].name.value.length < 2  || document.forms[0].name.value.match(patternName) != null) {

        temp = document.querySelector('.errorNameClass');
        temp.classList.add('active');
        document.registrationForm.name.focus();
        return false

    }
    else{

        temp = document.querySelector('.errorNameClass');        
        temp.classList.remove('active');

    }
    
    return true;

}







// let loginId = document.getElementById('loginId');
// loginId.innerHTML = 'TEST';

// Шаблон регулярного выражения пароля 
// ((?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})

// (			# Start of group
// (?=.*d)		#   must contains one digit from 0-9
// (?=.*[a-z])		#   must contains one lowercase characters
// (?=.*[A-Z])		#   must contains one uppercase characters
// (?=.*[@#$%])		#   must contains one special symbols in the list "@#$%"
// .		#     match anything with previous condition checking
// {6,20}	#        length at least 6 characters and maximum of 20
// )			# End of group

// Регулярное выражение, которое соответствует e-mail адресу
//    /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm

// const pattern_1 = /[0-9]/;
// const pattern_2 = /[a-z]/;
// const pattern_3 = /[A-Z]/;
// const pattern_4 = /[A-Za-z0-9]{6,}/;

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions
// website-lab.ru/article/regexp/shpargalka_po_regulyarnyim_vyirajeniyam/
// https://habr.com/ru/post/340146/
// https://jwt.io/
// https://vc.ru/dev/106534-jwt-kak-bezopasnyy-sposob-autentifikacii-i-peredachi-dannyh
