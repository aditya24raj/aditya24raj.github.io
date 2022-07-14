var fruits = ['Apple', 'Banana', 'Butter Fruit', 'Mango', 'Orange'];

// initially show the fruit at 0th position
document.getElementById('fruit').value = fruits[0];


function main(myEvent)
{
	// get which fruit is currently being displayed
	var currentFruit = document.getElementById('fruit').value;
	
	// find index of currentFruit
	var currentFruitIndex = fruits.indexOf(currentFruit);
	
	if (myEvent.target.textContent === 'Previous Fruit')
	{
		// previous button was pressed
		
		var previousFruitIndex = currentFruitIndex - 1;
		
		if (previousFruitIndex < 0)
		{
			// already on first fruit, no previous fruit possible
			// show error message and exit
			document.getElementById('error-message').textContent = 'Already showing the first fruit!';
			return;
		
		}
		
		// previous fruit is possible
		
		// clear any previously shown error message
		document.getElementById('error-message').textContent = '';
		
		// show previous fruit
		document.getElementById('fruit').value = fruits[previousFruitIndex];
		
		
	}
	else
	{
		// only 2 buttons are there,
		// so next button was pressed
		
		var nextFruitIndex = currentFruitIndex + 1;
		
		if (nextFruitIndex >= fruits.length)
		{
			//already on last fruit, no next fruit possible
			// show error message and exit
			document.getElementById('error-message').textContent = 'Already showing the last fruit!';
			return;
		}
		
		// next fruit is possible
		
		// clear any previously shown error message
		document.getElementById('error-message').textContent = '';
		
		// show next fruit
		document.getElementById('fruit').value = fruits[nextFruitIndex];
		
	}
	
	
}
