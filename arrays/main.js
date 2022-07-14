function clearOrderDetails()
{
	// Insert empty strings in all text fields
	document.getElementById('order-id').value = '';
	document.getElementById('product').value = '';
	document.getElementById('price').value = '';
	document.getElementById('quantity').value = '';
	document.getElementById('total-price').value = '';
}


function getOrderDetails()
{
	// Define a product Array
	var productArray = [
	{'OrderId': '00', 'Product': 'Mobile', 'Price': 25000, 'Quantity':1},
	{'OrderId': '01', 'Product': 'TV', 'Price': 45000, 'Quantity': 2},
	{'OrderId': '02', 'Product': 'Washing Machine', 'Price': 15000, 'Quantity': 3}
	];
	
	// Get which order number user wants to see details of
	var orderNum = document.getElementById('order-num').value;
	
	// Check if orderNum is empty
	if (orderNum === '')
	{
		// orderNum is empty
		
		// show error message
		document.getElementById('error-message').textContent = 'please enter a value!'
		
		// clear any previously printed order details
		clearOrderDetails()
		
		// and exit
		return;
	}
	
	// orderNum is not empty
	
	// clear any previously printed error message
	document.getElementById('error-message').textContent = '';
	
	// Store JSON object at orderNum index in productArray
	var tempObj = productArray[orderNum];
	
	// Insert values in tempObj in respective text fields
	document.getElementById('order-id').value = tempObj.OrderId;
	document.getElementById('product').value = tempObj.Product;
	document.getElementById('price').value = tempObj.Price;
	document.getElementById('quantity').value = tempObj.Quantity;
	document.getElementById('total-price').value = tempObj.Price * tempObj.Quantity;
}