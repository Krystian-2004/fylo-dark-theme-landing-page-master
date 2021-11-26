const form = document.querySelector('#form');
const inputEmail = form.querySelector('input[name=email]');
const errorMessage = document.querySelector('#error-message');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	let formErrorMessage = [];

	const regExpression =
		/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
	if (!regExpression.test(inputEmail.value)) {
		formErrorMessage.push('Please enter a valid email address');
	}

	if (!formErrorMessage.length) {
		e.target.submit();
	} else {
		errorMessage.innerHTML = `
			${formErrorMessage.map((mess) => `<p>${mess}</p>`)}
		`;
	}
});

// console.log('okay');

/*SpecialThanks
Special thanks to ${kursjs.pl} for the content provided by users at (https://kursjs.pl/kurs/formularze/formularze-walidacja.php);
Thanks to this content, my code works: D;
}
*/
