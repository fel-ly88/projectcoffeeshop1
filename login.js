document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const usernameInput = document.querySelector("input[name='username']");
    const passwordInput = document.querySelector("input[name='password1']");
  
    form.addEventListener("submit", (event) => {
      let isValid = true;
      clearErrors();
  
      // Validate username field
      if (usernameInput.value.trim() === "") {
        showError(usernameInput, "Username is required.");
        isValid = false;
      }
  
      // Validate password field
      if (passwordInput.value.trim() === "") {
        showError(passwordInput, "Password is required.");
        isValid = false;
      }
  
      // Prevent form submission if validation fails
      if (!isValid) {
        event.preventDefault();
      }
    });
  
    // Helper function to show error message
    function showError(input, message) {
      const errorElement = document.createElement("div");
      errorElement.classList.add("text-danger", "mt-1");
      errorElement.textContent = message;
      input.parentElement.appendChild(errorElement);
    }
  
    // Helper function to clear previous errors
    function clearErrors() {
      const errorMessages = document.querySelectorAll(".text-danger");
      errorMessages.forEach((error) => error.remove());
    }
  });
  