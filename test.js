function checkPerson() {
    let name = document.getElementById("nameInput").value;
    let age = Number(document.getElementById("ageInput").value);
    let role = document.getElementById("roleInput").value;
    let message = "";

    if (age >= 18 || age <= 60) {
        message = `Welcome ${name}, you are an ${role}! Access granted.`;
    } else if (age > 60) {
        message = `Sorry ${name}, you are too old to enter.`;
    } else {
        message = `Sorry ${name}, you are too young to enter.`;
    }

    document.getElementById("message").innerText = message;
}





//alert("Hello World!!");

// var yourName = prompt("What is your name?");
// alert("Hello " + yourName + "!!");

// var yourAge = prompt("What is your age?");
// yourAge = Number(yourAge); // تحويل النص إلى رقم

//alert("You are " + yourAge + " years old!!");

