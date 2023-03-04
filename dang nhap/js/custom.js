(function() {

    'use strict';

    var elToggle = document.querySelector('.js-password-show-toggle'),
        passwordInput = document.getElementById('password');

        elToggle.addEventListener('click', (e) => {
            e.preventDefault();

            if ( elToggle.classList.contains('active') ) {
                passwordInput.setAttribute('type', 'password');
                elToggle.classList.remove('active');
            } else {
                passwordInput.setAttribute('type', 'text');
                elToggle.classList.add('active');
            }
        })

})()

function dangky()
{               
    var flag = true;

    var email = getValue('email1');
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!mailformat.test(email)){
        flag = false;
        showError('email1', 'Vui lòng kiểm tra lại Email');
    }

    var password1 = getValue('password1');
    var repassword = getValue('repassword');
    if (password1 == '' || password1.length < 8 || password1 != repassword){
        flag = false;
        showError('password1', 'Vui lòng kiểm tra lại mật khẩu');
        showError('repassword', 'Vui lòng kiểm tra lại mật khẩu');
    }

    return flag;
}     

function dangnhap()
{
    var flag = true;

    var password = getValue('password');

    if (password == '' || password.length < 8){
        flag = false;
        showError('password', 'Vui lòng kiểm tra lại mật khẩu');
    }

    var email = getValue('email');
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[gmail]+(?:\.[com]+)*$/;
    if (!mailformat.test(email)){
        flag = false;
        showError('email', 'Vui lòng kiểm tra lại Email');
    }

    return flag;
}