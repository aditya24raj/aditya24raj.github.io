function calculate()
{
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
    if ((circumference || circumference == 0) && (area || area === 0))
    {
        document.getElementById("circumference").value = circumference;
        document.getElementById("area").value = area;
        return 0;
    }

    // circumference or area is invalid
    document.getElementById("circumference").value = null;
    document.getElementById("area").value = null;
    alert("No values or bad values provided. try again!")
    return 1;
    

    //console.log(circumference);
    //console.log(area);
}