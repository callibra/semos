function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
     
    var correctEmail = "user@example.com";
    var correctPassword = "password123";
    
        if (email === correctEmail && password === correctPassword) {
          console.log("Login successful");
        } else {
          console.log("Login failed");
        }

    console.log("Registration Detali:");
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Email: " + email);
    console.log("Password: " + password);
}
