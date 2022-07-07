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

    if (circumference && area)
    {
        document.getElementById("circumference").value = circumference;
        document.getElementById("area").value = area;
        return;
    }

    document.getElementById("circumference").value = circumference;
    document.getElementById("area").value = area;
    alert("No values or bad values provided. try again!")
    

    //console.log(circumference);
    //console.log(area);
}