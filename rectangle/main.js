function calculate()
{
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);
    
    //console.log(length+1);
    //cosole.log(width+1);

    // perimeter = 2 * (length + width)
    var perimeter = 2 * (length + width);
    // handle floating-point imprecision
    var perimeter = Number((perimeter).toFixed(2));

    // Area = length * width
    var area = length * width
    // handle floating-point imprecision
    var area = Number((area).toFixed(2));

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