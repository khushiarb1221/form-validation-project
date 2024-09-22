function validateForm() {
  let isValid = true;

  // Name Validation
  const name = document.getElementById('fullName').value;
  if (name.length < 5) {
    document.getElementById('nameError').textContent = "Name must be at least 5 characters.";
    isValid = false;
  } else {
    document.getElementById('nameError').textContent = "";
  }

  // Email Validation
  const email = document.getElementById('email').value;
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    document.getElementById('emailError').textContent = "";
  }

  // Phone Number Validation
  const phone = document.getElementById('phone').value;
  if (phone.length !== 10 || isNaN(phone)) {
    document.getElementById('phoneError').textContent = "Phone number must be 10 digits.";
    isValid = false;
  } else {
    document.getElementById('phoneError').textContent = "";
  }

  // Password Validation
  const password = document.getElementById('password').value;
  if (password.length < 8) {
    document.getElementById('passwordError').textContent = "Password must be at least 8 characters.";
    isValid = false;
  } else {
    document.getElementById('passwordError').textContent = "";
  }

  // Confirm Password Validation
  const confirmPassword = document.getElementById('confirmPassword').value;
  if (password !== confirmPassword) {
    document.getElementById('confirmPasswordError').textContent = "Passwords do not match.";
    isValid = false;
  } else {
    document.getElementById('confirmPasswordError').textContent = "";
  }

  return isValid; // If validation fails, form won't submit
}
