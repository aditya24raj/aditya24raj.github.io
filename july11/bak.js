function add()
{
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    console.log(num1+num2)
}

function mutliply()
{
    let result = parseInt(document.getElementById("num1").value) * 5;
    document.getElementById("num2").value = result;
}

function printJson()
{
    let obj1 = { "Name": "Aditya", "Gender": "Male", "Place": "Bihar", "Address": {"City": "Sheohar", "PinCode": "123456"} };

    console.log(obj1.Name);
    console.log(obj1.Gender);
    console.log(obj1.Place);

}

function printJsonKey()
{
    console.log(document.getElementById("select1").value);
}