function printJsonValue()
{
    let obj1 = { "Name": "Aditya", "Gender": "Male", "Place": "Bihar", "Address": {"City": "Sheohar", "PinCode": "123456"} };
    
    // get what user selected from drop down
    let obj1Key = document.getElementById("select1").value;
    
    // get proper value from obj1
    // initialize an array to store our values in
    let obj1Values = [];

    // handle special values
    // values which cannot be extracted directly or require formatting
    if (obj1Key === "Address")
    {
        let address = `${obj1.Address.City}, ${obj1.Address.PinCode}`;
        obj1Values.push(address); 
    }
    else if (obj1Key === "City")
    {
        obj1Values.push(obj1.Address.City);
    }
    else if (obj1Key === "PinCode")
    {
        obj1Values.push(obj1.Address.PinCode);
    }
    else if (obj1Key == "All")
    {
        obj1Values.push(
            obj1.Name,
            obj1.Gender,
            obj1.Place,
            `${obj1.Address.City}, ${obj1.Address.PinCode}`);
    }
    else 
    {
        // handle values which can be extracted directly
        obj1Values.push(obj1[obj1Key]);
    }

    // get reference to section in which we will display output
    let parent = document.getElementById("output-area");
    
    // clear previous childern of parent
    parent.innerHTML = null;

    for (let obj1Value of obj1Values)
    {
        // insert value wrapped in span and followed by br
        parent.innerHTML += `<span>${obj1Value}</span><br>`;
        
    }

}
