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

    if (perimeter && area)
    {
        document.getElementById("perimeter").value = perimeter;
        document.getElementById("area").value = area;
        return;
    }

    document.getElementById("perimeter").value = perimeter;
    document.getElementById("area").value = area;
    alert("No values or bad values provided. try again!")
    

    //console.log(perimeter);
    //console.log(area);
}