document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const username = document.querySelector("input[name='username']");
    const email = document.querySelector("input[name='email']");
    const phone = document.querySelector("input[name='phone']");
    const password1 = document.querySelector("input[name='password1']");
    const password2 = document.querySelector("input[name='password2']");
    const successMsg = document.querySelector("span[style='color: green;']");
    const errorMsg = document.querySelector("span[style='color: red;']");
    const errorMsg1 = document.querySelector("span[style='color: red;']:last-of-type");
  
    form.addEventListener("submit", (event) => {
      // Clear previous messages
      successMsg.textContent = "";
      errorMsg.textContent = "";
      errorMsg1.textContent = "";
  
      let isValid = true;
  
      // Check if all fields are filled
      if (!username.value || !email.value || !phone.value || !password1.value || !password2.value) {
        errorMsg.textContent = "All fields are required.";
        isValid = false;
      }
  
      // Validate email format
      const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email.value)) {
        errorMsg.textContent = "Invalid email address.";
        isValid = false;
      }
  
      // Validate phone number format (example for +254 country code)
      const phonePattern = /^\+254\d{9}$/;
      if (!phonePattern.test(phone.value)) {
        errorMsg.textContent = "Invalid phone number. Use format: +254700000000";
        isValid = false;
      }
  
      // Check if passwords match
      if (password1.value !== password2.value) {
        errorMsg1.textContent = "Passwords do not match.";
        isValid = false;
      }
  
      // If form is not valid, prevent submission
      if (!isValid) {
        event.preventDefault();
        return;
      }
  
      // Show success message (for demo purposes)
      successMsg.textContent = "Account created successfully!";
    });
  });
  