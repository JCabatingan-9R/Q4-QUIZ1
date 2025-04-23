function calc() {
	var weight = document.getElementById('IDkg').value;
	var height = document.getElementById('IDmeter').value;
	var bmi = weight / Math.pow(height,2); // formula to get BMI: weight divided by the height raised to 2
	var bmi = bmi.toFixed(2); // round off to 2 decimal places
	if (bmi <= 18.4) { //Underweight
		document.getElementById('IDoutput').innerHTML = bmi + ' BMI. You are Underweight!';
	}
	else if (bmi >= 18.5 && bmi <= 24.9) { //Normal weight
		document.getElementById('IDoutput').innerHTML = bmi + ' BMI. You are Normal weight!';
	}
	else if (bmi >= 25.0 && bmi <= 29.9) { //Overweight
		document.getElementById('IDoutput').innerHTML = bmi + ' BMI. You are Overweight!';
	}
	else if (bmi >= 30.0) { //Obese
		document.getElementById('IDoutput').innerHTML = bmi + ' BMI. You are Obese!';
	}

	else {
		window.alert('Please put in an appropriate number.'); // for a non-number value or non-suitable value
	}
}