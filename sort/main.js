function sort(myEvent) {

    // function got called again, possibly with new values
    // hide previous alerts
    bootstrapAlertClose();

    // get reference to all input fields
    var inputFields = document.querySelectorAll("input");

    // we will store all input values in values
    var values = [];
    
    for (var inputField of inputFields)
    {
        // store all input value in values array
        if (inputField.value)
        {
            values.push(inputField.value);
            continue;
        }
        bootstrapAlertShow();
        return 1;
    }

    // sorting the values array, using selection sort
    // TODO: use bubble sort, for better time complexity when values is already sorted
    var sortOrder = myEvent.target.id;
    var tempIndex = 0;
    for (var i=0; i<values.length; i++)
    {
        // start with a temp set to i
        tempIndex = i;
        for (var j=i; j<values.length; j++)
        {
            if (sortOrder === 'ascending' && values[j].length < values[tempIndex].length)
            {
                // it is ascending sort by length of string
                // store smallest string's index in tempIndex
                tempIndex = j;
            }
            else if (sortOrder === 'descending' && values[j].length > values[tempIndex].length)
            {
                // it is descending sort by length of string
                // store largest string's index in tempIndex
                tempIndex = j;
            }
        }

        // swap value of index i with value of index tempindex
        var temp = values[i];
        values[i] = values[tempIndex];
        values[tempIndex] = temp;

    }

    // put sorted values in their boxes
    for (var i=0, valueLength=values.length; i<valueLength; i++)
    {
        inputFields[i].value = values[i];
    }

    return 0;


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
