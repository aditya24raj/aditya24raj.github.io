function generate()
{
    // function got called again, possibly with new values
    // hide previous alerts
    bootstrapAlertClose();

    // get tableOf value
    let tableOf = parseFloat(document.getElementById("tableOf").value);

    // get tableTill value
    let tableTill = parseInt(document.getElementById("tableTill").value);

    // check invalid values
    if ((tableOf || tableOf === 0) && (tableTill || tableTill === 0))
    {
        // set table_title
        document.getElementById("table_title").innerText = "Table Of " + tableOf;

        // get reference of "table_values", it table body where we will add out table rows
        let parent = document.getElementById("table_values");
        // clear previous childern of parent
        parent.innerHTML = null;

        // start adding rows
        for (let i=1; i<=tableTill; i++)
        {
            // generate a table row with required values enclosed in td element
            parent.innerHTML += generateString(tableOf, i);
        }
        return 0;
    }
    // clear previous/wrong values
    document.getElementById("table_title").innerText = null;
    document.getElementById("tableOf").value = null;
    document.getElementById("tableTill").value = null;
    document.getElementById("table_values").innerHTML = null;
    bootstrapAlertShow();
    return 1;

} 

function generateString(tableOf, i)
{
    // all the items and fillers we need to display
    items = [tableOf, "&times;", i, "=", parseFloat((tableOf*i).toFixed(2))]

    let tds = "<td class='px-1 py-0'>";
    let tde = "</td>";

    // string containing all items properly enclosed in tds and tde
    let finalString = "";
    
    for (i of items)
    {
        // enclosing each value in <td> element and
        // concatenating to final string
        finalString += tds + i + tde
    }

    // finally enclose final string in a <tr> element
    finalString = "<tr>" + finalString + "</tr>";
    
    return finalString;

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