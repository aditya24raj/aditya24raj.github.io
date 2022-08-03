journalDetails = {
    'Aditya_Raj': 'https://aditya24raj.github.io/journal/',
    'Ajit_N_Ogale': 'https://ajit1-mrk.github.io/Ajit_journal',
    'Anmol_Saxena': 'https://anmol-mrk.github.io/Journal.html',
    'Ashutosh_P_Hore': 'https://ashutosh-mrk.github.io/Journal.html',
    'Ashwini_V_Waghale': 'https://programmash.github.io/Journal.html',
    'Ashwini_Dolli': 'https://ashwinisdolli.github.io/journal.html',
    'Basavaraja_C': 'https://basavaraj-mrk.github.io/Journal.html',
    'Bharti_C_Rahangdale': 'https://bharti-mrk.github.io/journal.html',
    'Chetan_A_Tekam': 'https://chetan-mrk.github.io/Journal.html',
    'Deepika_A_Lohakare': 'https://deepika-mrk.github.io/journal.html',
    'Ekta_Y_Suryawanshi': 'https://ekta-mrk.github.io/Journal.html',
    'Gangavarapu_Mahendra': 'https://mahendra-mrk.github.io/Journal.html',
    'Himanshu_K_Tajne': 'https://himanshu-mrk.github.io/Journal.html',
    'Kunal_P_Lambat': 'https://kunal-mrk.github.io/journal.html',
    'Lokesh_R_Gaidhane': 'https://lokesh-mrk.github.io/Journal.html',
    'Lucky_R_Rakhunde': 'https://lucky-mrk.github.io/Journal.html',
    'Mahesh_R_Thakre': 'https://mahesht-mrk.github.io/journal.html',
    'Neha_A_Upadhyaya': 'https://neha-mrk.github.io/journal.html',
    'Nithin_E': 'https://nithin-mrk.github.io/Journal.html',
    'Pratiksha_B_Gaidhane': 'https://pratiksha-mrk.github.io/journal.html',
    'Praveen_Birader': 'https://praveen-mrk.github.io/journal.html',
    'Rahul_R_Nashikkar': 'https://rahul-mrk.github.io/Journal.html',
    'Ramya_H_S': 'https://ramya-mrk.github.io/journal.html',
    'Rishabh_Jain': 'https://rishabh-mrk.github.io/journal.html',
    'Sagar_S_Jalageri': 'https://sagar-mrk.github.io/journal.html',
    'Sanjay_B_S': 'https://sanjay-mrk.github.io/journal.html',
    'Shivam_P_Bhankhede': 'https://shivam-mrk.github.io/Journal.html',
    'Shubham_B_Ladase': 'https://shubham-mrk.github.io/Journal.html',
    'Sneha_T_Malghate': 'https://sneha-mrk.github.io/journal.html',
    'Suraj_S_Bhoskar': 'https://suraj-mrk.github.io/Journal.html',
    'Swapnil_D_Pulate': 'https://swapnil-mrk.github.io/journal.html',
    'Swastik_R_Katre': 'https://swastikkatre.github.io/journal.html',
    'Swathi_R_Premar': 'https://swathi-mrk.github.io/Journal.html',

};

// keep a global reference to iframe as it will be needed multiple times
myIframe = document.getElementById("my-iframe");

function populateNavbar()
{
    // get reference to navbar
    var myNavbar = document.getElementById("my-navbar");
    for (var person in journalDetails)
    {
        // add a button for each person
        // make it call main on click with event
        myNavbar.innerHTML += `<a href='${journalDetails[person]}' onclick='showIframe(event)'>${person}</a><br>`
    }

    myIframe.style.right = '0px';
    myIframe.style.left = `${document.getElementById("my-sidebar").offsetWidth}px`;
}

// we want to highlight which name was just clicked, to keep track of where in the index we currently are
// to implement it we will have to clear this hightlight from previously clicked name
// so keep last event handy to modify its highlight
var lastEvent = null;

function showIframe(currentEvent)
{
    // find title of button which was pressed
    var person = currentEvent.target.textContent;

    // clear highlight of last clicked name
    if (lastEvent)
    {
        lastEvent.target.style.color = "#8ab4f8";
        lastEvent.target.style.backgroundColor = "transparent";
    }

    // apply highlight to current clicked name
    currentEvent.target.style.color = "black";
    currentEvent.target.style.backgroundColor = "#8ab4f8";

    // store current event as last event
    lastEvent = currentEvent;
    
    // load iframe of this person's journal
    myIframe.innerHTML = `<iframe src="${journalDetails[person]}" style="width: 100%; height: 100vh;"></iframe>`;

    // prevent link from opening
    currentEvent.preventDefault();
}

// populate navbar on pageload
populateNavbar()

// show first person's journal automatically
document.getElementById("my-iframe").innerHTML = `<iframe src="${journalDetails['Aditya_Raj']}" style="width: 100%; height: 100vh;"></iframe>`;

