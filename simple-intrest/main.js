function simpleInterest()
{
    var principalAmount = parseFloat(document.getElementById("principal").value);
    var annualRate = parseFloat(document.getElementById("annual-rate").value);
    var time = parseFloat(document.getElementById("time").value);
    
    //console.log(principalAmount+1);
    //console.log(annualRate+1);
    //console.log(time+1)

    var finalAmount = principalAmount * (1 + annualRate * time);
    
    // handle floating-point imprecision
    var finalAmount = Number((finalAmount).toFixed(2))
    if (finalAmount)
    {
        document.getElementById("amount").value = finalAmount;
        return;
    }
    document.getElementById("amount").value = finalAmount;
    alert("No values or bad values provided. try again!")
    

    //console.log(finalAmount);
}