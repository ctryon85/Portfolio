
// Rock Paper Scissors Game
document.addEventListener('DOMContentLoaded', function() {
	const buttons = document.querySelectorAll('.rps-buttons button');
	const resultDiv = document.getElementById('rps-result');
	const choices = ['rock', 'paper', 'scissors'];

	buttons.forEach(button => {
		button.addEventListener('click', function() {
			const userChoice = this.getAttribute('data-choice');
			const computerChoice = choices[Math.floor(Math.random() * 3)];
			const winner = getWinner(userChoice, computerChoice);
			resultDiv.innerHTML = `
				<strong>You:</strong> ${capitalize(userChoice)}<br>
				<strong>Computer:</strong> ${capitalize(computerChoice)}<br>
				<strong>Result:</strong> ${winner}
			`;
		});
	});

	function getWinner(user, computer) {
		if (user === computer) return 'Tie!';
		if (
			(user === 'rock' && computer === 'scissors') ||
			(user === 'paper' && computer === 'rock') ||
			(user === 'scissors' && computer === 'paper')
		) {
			return 'You Win!';
		} else {
			return 'Computer Wins!';
		}
	}

	function capitalize(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
});
     