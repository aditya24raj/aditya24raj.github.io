function calculate()
{
    // function got called again, possibly with new values
    // hide previous alerts
    bootstrapAlertClose();

    var principalAmount = parseFloat(document.getElementById("principal").value);
    var annualRate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);
    var N = parseFloat(document.getElementById("N").value);
    
    //console.log(principalAmount+1);
    //console.log(annualRate+1);
    //console.log(time+1)

    var finalAmount = principalAmount * (1 + annualRate / N) ** (N * time);
    // handle floating-point imprecision
    var finalAmount = Number((finalAmount).toFixed(2))
    
    if (finalAmount || finalAmount === 0)
    {
        document.getElementById("finalAmount").value = finalAmount;
        return 0;
    }
    document.getElementById("finalAmount").value = null;
    bootstrapAlertShow();
    return 1;
    

    //console.log(finalAmount);
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