document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Here you can add your login validation logic
    // For simplicity, let's just alert the username and password
    alert("Username: " + username + "\nPassword: " + password);
});
