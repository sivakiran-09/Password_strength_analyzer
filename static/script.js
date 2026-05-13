function togglePassword(){
    let passwordField = document.getElementById("password");
    let toggleBtn = document.querySelector(".toggle-btn");
    
    if(passwordField.type === "password"){
        passwordField.type = "text";
        toggleBtn.textContent = "Hide";
    }
    else{
        passwordField.type = "password";
        toggleBtn.textContent = "Show";
    }
}

function checkPassword(){

    let password =
    document.getElementById("password").value;

    let score = 0;

    let tips = [];

    // Length Check
    if(password.length >= 8){
        score++;
    }
    else{
        tips.push("Use at least 8 characters");
    }

    // Uppercase
    if(/[A-Z]/.test(password)){
        score++;
    }
    else{
        tips.push("Add uppercase letters");
    }

    // Lowercase
    if(/[a-z]/.test(password)){
        score++;
    }
    else{
        tips.push("Add lowercase letters");
    }

    // Numbers
    if(/[0-9]/.test(password)){
        score++;
    }
    else{
        tips.push("Add numbers");
    }

    // Special Characters
    if(/[!@#$%^&*]/.test(password)){
        score++;
    }
    else{
        tips.push("Add special characters");
    }

    let result =
    document.getElementById("result");

    let tipsList =
    document.getElementById("tips");

    tipsList.innerHTML = "";

    if(score <= 2){
        result.innerHTML = "Weak Password";
        result.style.color = "red";
    }

    else if(score <= 4){
        result.innerHTML = "Medium Password";
        result.style.color = "orange";
    }

    else{
        result.innerHTML = "Strong Password";
        result.style.color = "lightgreen";
    }

    // Show Tips
    tips.forEach(function(tip){

        let li = document.createElement("li");

        li.textContent = tip;

        tipsList.appendChild(li);
    });

}