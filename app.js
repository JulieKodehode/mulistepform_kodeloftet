// KUN for demonstration. Denne koden vil ikke virke i dette prosjektet!

// Må laste ned Node og bruke npm install react for å få installert react til prosjektet.
// useState er en react-hook som kan sette statuser på aktive klasse komponenter
// import React, { useState } from "react";

const App = () => {
	const [currentStep, setCurrentStep] = useState(1);

	const nextStep = () => {
		if (currentStep < 4) {
			setCurrentStep(currentStep + 1);
		}
	};

	const prevStep = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		// Additional logic for form submission if needed

		// Transition to the fourth step
		setCurrentStep(4);
	};

	return (
		<div>
			{/* Render your steps based on the currentStep */}
			<div id="step1" className={currentStep === 1 ? "" : "hidden"}>
				Step 1 Content
			</div>
			<div id="step2" className={currentStep === 2 ? "" : "hidden"}>
				Step 2 Content
			</div>
			<div id="step3" className={currentStep === 3 ? "" : "hidden"}>
				Step 3 Content
			</div>
			<div id="step4" className={currentStep === 4 ? "" : "hidden"}>
				Step 4 Content
			</div>

			{/* "Next" and "Previous" buttons */}
			{currentStep < 4 && (
				<button className="next-btn" onClick={nextStep}>
					Next
				</button>
			)}
			{currentStep > 1 && (
				<button className="prev-btn" onClick={prevStep}>
					Previous
				</button>
			)}

			{/* Form */}
			<form id="multiStepForm" onSubmit={handleSubmit}>
				{/* Form fields go here */}
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default App;
