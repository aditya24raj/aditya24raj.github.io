function calculate()
{
    var radius = parseFloat(document.getElementById("radius").value);
    var height = parseFloat(document.getElementById("height").value);
    
    //console.log(radius+1);
    //cosole.log(height+1);

    // volume =  PI * (radius**2) * height
    var volume = Math.PI * (radius**2) * height;
    // handle floating-point imprecision
    var volume = Number((volume).toFixed(2));

    // lateral Area = 2 * PI * radius * height
    var lateralArea = 2 * Math.PI * radius * height;
    // handle floating-point imprecision
    var lateralArea = Number((lateralArea).toFixed(2));

    if ((volume || volume === 0) && (lateralArea || lateralArea === 0))
    {
        document.getElementById("volume").value = volume;
        document.getElementById("lateralArea").value = lateralArea;
        return 0;
    }

    document.getElementById("volume").value = null;
    document.getElementById("lateralArea").value = null;
    alert("No values or bad values provided. try again!")
    return 1;
    

    //console.log(volume);
    //console.log(lateralArea);
}