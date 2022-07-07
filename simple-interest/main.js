function calculate()
{
    var principalAmount = parseFloat(document.getElementById("principal").value);
    var annualRate = parseFloat(document.getElementById("annualRate").value);
    var time = parseFloat(document.getElementById("time").value);
    
    //console.log(principalAmount+1);
    //console.log(annualRate+1);
    //console.log(time+1)

    var finalAmount = principalAmount * (1 + annualRate * time);
    
    // handle floating-point imprecision
    var finalAmount = Number((finalAmount).toFixed(2))
    if (finalAmount || finalAmount === 0)
    {
        document.getElementById("finalAmount").value = finalAmount;
        return;
    }
    // final amount is not a valid number
    document.getElementById("finalAmount").value = null;
    alert("No values or bad values provided. try again!")
    

    //console.log(finalAmount);
}