document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Fetch form values
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var appointmentDate = document.getElementById("appointmentDate").value;

    // Basic form validation
    if (fullName === "" || email === "" || phone === "" || appointmentDate === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Display a confirmation message
    alert("Appointment booked for " + fullName + " on " + appointmentDate);

    // You can add additional code here to submit the form data to a server
});
