document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const courses = Array.from(document.getElementById("courses").selectedOptions).map(option => option.value);

    let isValid = true;

    // Username validation
    if (!username) {
        document.getElementById("usernameError").textContent = "Username cannot be empty.";
        isValid = false;
    } else {
        document.getElementById("usernameError").textContent = "";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Phone validation
    const phoneRegex = /^\+92\d{9}$/;
    if (!phone || !phoneRegex.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone number must start with +92 and be 11 digits long.";
        isValid = false;
    } else {
        document.getElementById("phoneError").textContent = "";
    }

    // Password and confirm password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!password || !passwordRegex.test(password)) {
        document.getElementById("passwordError").textContent = "Password must have at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long.";
        isValid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    } else {
        document.getElementById("confirmPasswordError").textContent = "";
    }

    // Date of birth validation
    if (!dob) {
        document.getElementById("dobError").textContent = "Date of birth cannot be empty.";
        isValid = false;
    } else {
        document.getElementById("dobError").textContent = "";
    }

    // Gender validation
    if (!gender) {
        document.getElementById("genderError").textContent = "Gender must be selected.";
        isValid = false;
    } else {
        document.getElementById("genderError").textContent = "";
    }

    // Courses validation
    if (courses.length === 0) {
        document.getElementById("coursesError").textContent = "Please select at least one course.";
        isValid = false;
    } else {
        document.getElementById("coursesError").textContent = "";
    }

    if (isValid) {
        alert(`Signup Successful!
        Username: ${username}
        Email: ${email}
        Phone: ${phone}
        Password: ${password}
        Confirm Password: ${confirmPassword}
        Date of Birth: ${dob}
        Gender: ${gender}
        Courses: ${courses.join(", ")}`);
    }
});
