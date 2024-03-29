window.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('calc-form');
	if (form) {
		setupIntialValues();
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +document.getElementById('loan-amount').value,
		years: +document.getElementById('loan-years').value,
		rate: +document.getElementById('loan-rate').value,
	};
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	const values = { amount: 1000, years: 5, rate: 2.5 };
	const amountUserInput = document.getElementById('loan-amount');
	amountUserInput.value = values.amount;
	const yearsUserInput = document.getElementById('loan-years');
	yearsUserInput.value = values.years;
	const rateUserInput = document.getElementById('loan-rate');
	rateUserInput.value = values.rate;
	update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	const currentUserInputValues = getCurrentUIValues();
	updateMonthly(calculateMonthlyPayment(currentUserInputValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	const i = values.rate / 100 / 12;
	const n = Math.floor(values.years * 12);
	const monthlyPayment = (values.amount * i) / (1 - Math.pow(1 + i, -n));
	return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	const monthlyUserInput = document.getElementById('monthly-payment');
	monthlyUserInput.innerText = '$' + monthly;
}
