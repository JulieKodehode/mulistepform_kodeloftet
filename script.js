// Initialize the current step variable to 1
let currentStep = 1;

// Function to navigate to the next step
function nextStep() {
	// Check if the current step is less than 4 (total number of steps)
	if (currentStep < 4) {
		// Hide the current step
		const currentStep = document.getElementById(`step${currentStep}`);
		currentStep.classList.add("hidden");
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
function prevStep() {
	// Check if the current step is greater than 1
	if (currentStep > 1) {
		// Hide the current step
		document.getElementById(`step${currentStep}`).classList.add("hidden");
		// Decrement the current step
		currentStep--;
		// Show the previous step
		document.getElementById(`step${currentStep}`).classList.remove("hidden");
	}

	return div;
}

// // WITH FOREACH
// // Event listener for "Next" button clicks
// document.querySelectorAll(".next-btn").forEach(function (button) {
// 	button.addEventListener("click", nextStep);
// });

// // WITH FOREACH
// // Event listener for "Previous" button clicks
// document.querySelectorAll(".prev-btn").forEach(function (button) {
// 	button.addEventListener("click", prevStep);
// });

// With a for loop
// Event listener registration using for loop for "Next" buttons
let nextButtons = document.querySelectorAll(".next-btn");
for (let index = 0; index < nextButtons.length; index++) {
	nextButtons[index].addEventListener("click", nextStep);
}

// With a for loop
// Event listener registration using for loop for "Previous" buttons
let prevButtons = document.querySelectorAll(".prev-btn");
for (let index = 0; index < prevButtons.length; index++) {
	prevButtons[index].addEventListener("click", prevStep);
}

// Event listener for form submission
document.getElementById("multiStepForm").addEventListener("submit", function (event) {
	// Prevent the default form submission behavior
	event.preventDefault();

	// Additional logic for form submission if needed

	// Transition to the fourth step
	document.getElementById("step3").classList.add("hidden");
	document.getElementById("step4").classList.remove("hidden");
});
