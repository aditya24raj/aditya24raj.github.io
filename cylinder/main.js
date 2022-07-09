function calculate()
{
    // function got called again, possibly with new values
    // hide previous alerts
    bootstrapAlertClose();

    var radius = parseFloat(document.getElementById("radius").value);
    var height = parseFloat(document.getElementById("height").value);
    
    //console.log(radius+1);
    //cosole.log(height+1);

    // volume =  PI * (radius**2) * height
    var volume = Math.PI * (radius**2) * height;
    // handle floating-point imprecision
    var volume = Number((volume).toFixed(2));

    // lateral Area = 2 * PI * radius * height
    var lateralArea = 2 * Math.PI * radius * height;
    // handle floating-point imprecision
    var lateralArea = Number((lateralArea).toFixed(2));

    if ((volume || volume === 0) && (lateralArea || lateralArea === 0))
    {
        document.getElementById("volume").value = volume;
        document.getElementById("lateralArea").value = lateralArea;
        return 0;
    }

    document.getElementById("volume").value = null;
    document.getElementById("lateralArea").value = null;
    bootstrapAlertShow();
    return 1;
    

    //console.log(volume);
    //console.log(lateralArea);
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