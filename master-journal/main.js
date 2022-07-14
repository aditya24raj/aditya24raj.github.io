var journalDetails = {
    'Aditya_Raj': 'https://aditya24raj.github.io/journal/',
    'Himanshu_K_Tajne': 'https://himanshu-mrk.github.io/Journal.html'
};

function populateNavbar()
{
    // get reference to navbar
    var myNavbar = document.getElementById("my-navbar");
    for (var person in journalDetails)
    {
        // add a button for each person
        // make it call main on click with event
        myNavbar.innerHTML += `<button type='button' class='btn-link' style="border: 0; background: none; margin-bottom: -15px;" onclick="showIframe(event)">${person}</button><br>`
    }
}

function showIframe(event)
{
    // find title of button which was pressed
    var person = event.target.textContent;
    
    // load iframe of this person's journal
    document.getElementById("my-iframe").innerHTML = `<iframe src="${journalDetails[person]}" style="width: 100%; height: 100vh;"></iframe>`
}

// populate navbar on pageload
populateNavbar()

// show first person's journal automatically
document.getElementById("my-iframe").innerHTML = `<iframe src="${journalDetails['Aditya_Raj']}" style="width: 100%; height: 100vh;"></iframe>`

