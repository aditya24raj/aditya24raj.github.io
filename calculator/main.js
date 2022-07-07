function calculate(myEvent)
{
    var firstValue = parseFloat(document.getElementById("firstValue").value);
    var secondValue = parseFloat(document.getElementById("secondValue").value);

    // first and second values are 0 or other number
    if ((firstValue || firstValue == 0) && (secondValue || secondValue == 0) )
    {
        var clickedButtonId = myEvent.target.id;
        var finalResultField = document.getElementById("finalResult");
        
        if (clickedButtonId === "add")
        {
            finalResultField.value = Number((firstValue + secondValue).toFixed(2));
            return 0;
        }

        else if (clickedButtonId === "subtract")
        {
            finalResultField.value = Number((firstValue - secondValue).toFixed(2));
            return 0;
        }

        else if (clickedButtonId === "multiply")
        {
            finalResultField.value = Number((firstValue * secondValue).toFixed(2));
            return 0;
        }

        else if (clickedButtonId === "divide")
        {
            if (secondValue != 0)
            {
                finalResultField.value = Number((firstValue / secondValue).toFixed(2));
                return 0;
            }
            
            finalResultField.value = null;
            alert("Division by zero error")
            return 1;
        }
    }

    // first or second value was invalid
    alert("no value or invalid value provided");
    return 1;
}