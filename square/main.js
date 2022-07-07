function calculate()
{
    var side = parseFloat(document.getElementById("side").value);
    
    //console.log(side+1);

    // perimeter = 4 * side
    var perimeter = 4 * side
    // handle floating-point imprecision
    var perimeter = Number((perimeter).toFixed(2))

    // Area = side ** 2
    var area = side ** 2
    // handle floating-point imprecision
    var area = Number((area).toFixed(2))

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