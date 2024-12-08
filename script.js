
	document.getElementById("registrationForm").addEventListener("submit", function (e) {
		e.preventDefault(); // Prevent form submission

		const nameField = document.getElementById("name");
		const passwordField = document.getElementById("password");

		const nameError = document.getElementById("nameError");
		const passwordError = document.getElementById("passwordError");

		let isValid = true; 


		nameField.style.border = "";
		passwordField.style.border = "";
		nameError.textContent = "";
		passwordError.textContent = "";


		const name = nameField.value.trim();
		if (name.length < 6) {
			nameError.textContent = "Name must be at least 6 characters";
			nameField.style.border = "2px solid red";
			isValid = false;
		}
		if(!/^[a-zA-Z\s]+$/.test(name)){
			nameError.textContent = "Contain only alphabets.";
			nameField.style.border = "2px solid red";
			isValid = false;
		}

		
		const password = passwordField.value.trim();
		if (password.length < 6) {
		passwordError.textContent = "Password must be at least 6 characters long.";
		passwordField.style.border = "2px solid red";
		isValid = false;
		}
		//var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("confirmPassword").value;

            // Check if the passwords match
            if (password !== confirmPassword) {
                alert("Passwords do not match. Please try again.");
            }

		
		if (isValid) {
		alert("Form submitted successfully!");
		
		}
	});

