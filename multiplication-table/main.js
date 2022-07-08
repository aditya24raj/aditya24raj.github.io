function generate()
{
    // get tableOf value
    let tableOf = parseInt(document.getElementById("tableOf").value);

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
    alert("no value or bad value provided");
    return 1;

}

function generateString(tableOf, i)
{
    // all the items and fillers we need to display
    items = [tableOf, "&times;", i, "=", tableOf*i]

    let tds = "<td class='px-1'>";
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
