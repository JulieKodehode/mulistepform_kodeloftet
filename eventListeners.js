import { nextStep, prevStep } from "./stepNavigation.js";

// Event listener registration using forEach for "Next" buttons
document.querySelectorAll(".next-btn").forEach(function (button) {
	button.addEventListener("click", nextStep);
});

// Event listener registration using forEach for "Previous" buttons
document.querySelectorAll(".prev-btn").forEach(function (button) {
	button.addEventListener("click", prevStep);
});

// Event listener for form submission
document.getElementById("multiStepForm").addEventListener("submit", function (event) {
	// Prevent the default form submission behavior
	event.preventDefault();

	// Additional logic for form submission if needed

	// Transition to the fourth step
	document.getElementById("step3").classList.add("hidden");
	document.getElementById("step4").classList.remove("hidden");
});
