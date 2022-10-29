var pass = document.getElementById("pass");
//pass.addEventListener("input", checkPassword(), false);
var progressmeter = document.getElementById("strengthBar");
var suggest = document.getElementById("suggest");
var suggestPass = document.getElementById("suggestPass");
var shwlen = document.getElementById("shwLen");
function checkPassword() {


    var len = pass.value.length;
    var passval = pass.value;
    var weakregex = /^[a-z|0-9]{1,6}$/;
    var moderateregex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{7,9}$/;
    var strongregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,15}$/;
    var unbrakeregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    suggest.style.display = "none";
    if (len < 1) { progressmeter.style.width = '0%'; genPassword(); }
    else if (len < 7 || weakregex.test(passval)) {
        progressmeter.style.width = '25%';
        progressmeter.style.backgroundColor = "red";
        // progressmeter.style.background = "red";
        genPassword();
    }
    else if ((len < 10 && len > 6) || moderateregex.test(passval)) {
        progressmeter.style.width = '50%';
        progressmeter.style.backgroundColor = "orange";
        genPassword();
    }
    else if ((len < 16 && len > 9) || strongregex.test(passval)) {
        progressmeter.style.width = '75%';
        progressmeter.style.backgroundColor = "blue";
    }
    else if ((len >= 16) || unbrakeregex.test(passval)) {
        progressmeter.style.width = '100%';
        progressmeter.style.backgroundColor = "green";
    }
}


function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 17;
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    suggest.style.display = "block";
    suggestPass.innerHTML = password;
}

function usePass(){
    pass.value = suggestPass.innerHTML;
}

function showLen(){
    var len = pass.value.length;
    shwlen.style.display = "block";
    shwlen.innerHTML = "Password Len: "+ len;
}
function hideLen(){
    shwlen.style.display = "none";
}