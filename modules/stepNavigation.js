// Initialize the current step variable to 1
let currentStep = 1;

// Function to navigate to the next step
export function nextStep() {
	// Check if the current step is less than 4 (total number of steps)
	if (currentStep < 4) {
		// Hide the current step
		document.getElementById(`step${currentStep}`).classList.add("hidden");
		// Increment the current step
		currentStep++;
		// Show the next step
		document.getElementById(`step${currentStep}`).classList.remove("hidden");

		// Additional logic for the fourth step if needed
		if (currentStep === 4) {
			// Additional logic for the fourth step if needed
		}
	}
}

// Function to navigate to the previous step
export function prevStep() {
	// Check if the current step is greater than 1
	if (currentStep > 1) {
		// Hide the current step
		document.getElementById(`step${currentStep}`).classList.add("hidden");
		// Decrement the current step
		currentStep--;
		// Show the previous step
		document.getElementById(`step${currentStep}`).classList.remove("hidden");
	}
}
