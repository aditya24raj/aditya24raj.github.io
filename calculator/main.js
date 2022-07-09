function calculate(myEvent)
{
    // function got called again, possibly with new values
    // hide previous alerts
    bootstrapAlertClose();

    var firstValue = parseFloat(document.getElementById("firstValue").value);
    var secondValue = parseFloat(document.getElementById("secondValue").value);

    // first and second values are 0 or other number
    if ((firstValue || firstValue === 0) && (secondValue || secondValue === 0) )
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
            bootstrapAlertShow("Division by zero error");
            return 1;
        }
    }

    // first or second value was invalid
    bootstrapAlertShow();
    return 1;
}



function bootstrapAlertShow(message="No value or bad value provided")
{
    let alertHTML = `
    <div id="myAlert" class="alert alert-danger alert-dismissible fade show mx-auto my-3" role="alert">
        ${message}
        <button type="button" class="btn-close close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;

    document.getElementById("main-content").innerHTML += alertHTML;

    // move focus to first input element once this alert is close
    var myAlert = document.getElementById('myAlert')
    myAlert.addEventListener('closed.bs.alert', function () {
        document.querySelector("input").focus()
    })
}

function bootstrapAlertClose()
{
    var alertNode = document.querySelector('.alert');
    if (alertNode)
    {
        alertNode.remove();
    }

}