function calculate()
{
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
    alert("No values or bad values provided. try again!")
    return 1;
    

    //console.log(perimeter);
    //console.log(area);
}