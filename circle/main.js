function calculate()
{
    // function got called again, possibly with new values
    // hide previous alerts
    bootstrapAlertClose();
    
    var radius = parseFloat(document.getElementById("radius").value);
    
    //console.log(radius+1);

    // Circumference = 2 * PI * radius
    var circumference = 2 * Math.PI * radius
    // handle floating-point imprecision
    var circumference = Number((circumference).toFixed(2))

    // Area = PI * radius ** 2
    var area = Math.PI * (radius ** 2)
    // handle floating-point imprecision
    var area = Number((area).toFixed(2))

    // circumference or area is either 0 or some other number
    if ((circumference || circumference === 0) && (area || area === 0))
    {
        document.getElementById("circumference").value = circumference;
        document.getElementById("area").value = area;
        return 0;
    }

    // circumference or area is invalid
    document.getElementById("circumference").value = null;
    document.getElementById("area").value = null;
    bootstrapAlertShow();
    return 1;
    

    //console.log(circumference);
    //console.log(area);
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
