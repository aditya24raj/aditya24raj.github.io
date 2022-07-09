function calculate()
{
    // function got called again, possibly with new values
    // hide previous alerts
    bootstrapAlertClose();

    var length = parseFloat(document.getElementById("length").value);
    var breadth = parseFloat(document.getElementById("breadth").value);
    
    //console.log(length+1);
    //cosole.log(breadth+1);

    // perimeter = 2 * (length + breadth)
    var perimeter = 2 * (length + breadth);
    // handle floating-point imprecision
    var perimeter = Number((perimeter).toFixed(2));

    // Area = length * breadth
    var area = length * breadth
    // handle floating-point imprecision
    var area = Number((area).toFixed(2));

    if ((perimeter || perimeter === 0) && (area || area === 0))
    {
        document.getElementById("perimeter").value = perimeter;
        document.getElementById("area").value = area;
        return 0;
    }

    document.getElementById("perimeter").value = null;
    document.getElementById("area").value = null;
    bootstrapAlertShow();
    return 1;
    

    //console.log(perimeter);
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