it('should calculate the monthly rate correctly', function () {
	const values = {
		amount: 8750,
		years: 5,
		rate: 4.5,
	};
	expect(Number(calculateMonthlyPayment(values))).toEqual(163.13);
});

it('should return a result with 2 decimal places', function () {
	const values = {
		amount: 15000,
		years: 2,
		rate: 2.5,
	};
	expect(Number(calculateMonthlyPayment(values))).toEqual(641.41);
});

it('should accept high yearly rates', function () {
	const values = {
		amount: 25000,
		years: 8,
		rate: 299,
	};
	expect(Number(calculateMonthlyPayment(values))).toEqual(6229.17);
});
